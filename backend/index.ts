const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    tasks: [Task]
  }
`;

const tasks = [
  { id: "1", title: "Task 1", content: "Content 1" },
  { id: "2", title: "Task 2", content: "Content 2" },
  { id: "3", title: "Task 3", content: "Content 3" },
];

const resolvers = {
  Query: {
    tasks: () => tasks,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
