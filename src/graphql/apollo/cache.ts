import { InMemoryCache, makeVar } from "@apollo/client";
import { Task } from "../types";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        fetchPriorityTasks: {
          read() {
            return priorityTasksVar();
          },
        },
      },
    },
  },
});

// Reactive variables を空配列で初期化
export const priorityTasksVar = makeVar<Task[]>([]);
