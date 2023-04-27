import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TaskList } from "./components/TaskList";
import { ApolloClient, ApolloProvider, HttpLink } from "@apollo/client";
import { cache } from "./graphql/apollo/cache";

const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: "http://localhost:4000" }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <TaskList />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
