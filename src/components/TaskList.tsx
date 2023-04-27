import React, { FC } from "react";
import { Task } from "../graphql/types";
import { priorityTasksVar } from "../graphql/apollo/cache";
import { PriorityTaskList } from "./PriorityTaskList";
import { gql, useQuery } from "@apollo/client";

const FETCH_ALL_TASKS = gql`
  query FetchAllTasks {
    tasks {
      id
      title
      content
    }
  }
`;

export const TaskList: FC = () => {
  const { data } = useQuery(FETCH_ALL_TASKS);
  const addToPriorityTasks = (task: Task) => {
    const newPriorityTasks = [...priorityTasksVar(), task];

    // 重複を排除した配列でリアクティブ変数を更新
    priorityTasksVar(Array.from(new Set(newPriorityTasks)));
  };

  return (
    <div>
      <PriorityTaskList />
      <h1>タスク一覧</h1>
      <table cellSpacing={10}>
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th>内容</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {data?.tasks.map((task: Task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.content}</td>
              <td>
                <button onClick={() => addToPriorityTasks(task)}>
                  優先タスクに追加
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
