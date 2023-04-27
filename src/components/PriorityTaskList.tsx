import React, { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { Task } from "../graphql/types";

const FETCH_PRIORITY_TASKS = gql`
  query FetchPriorityTasks {
    fetchPriorityTasks @client {
      id
      title
    }
  }
`;

export const PriorityTaskList: FC = () => {
  const { data } = useQuery(FETCH_PRIORITY_TASKS);
  console.log("rendered");

  return (
    <div>
      <h1>優先のタスク一覧</h1>
      <ul>
        {data?.fetchPriorityTasks.map((task: Task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
