import { v4 as uuidv4 } from "uuid";

export const initialState = {
  tasks: [],
};

export const actionTypes = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  REFACTOR_TASK: "REFACTOR_TASK",
  COMPLETED_TASK: "COMPLETED_TASK",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const task = action.payload;
      return {
        tasks: [
          ...state.tasks,
          {
            id: uuidv4(),
            body: task.body,
            isCompleted: false,
            isEditing: false,
          },
        ],
      };
    case actionTypes.DELETE_TASK:
      const id = action.payload;
      return {
        tasks: state.tasks.filter((item) => id !== item.id),
      };

    case actionTypes.COMPLETED_TASK:
      const idCompleted = action.payload;
      return {
        tasks: state.tasks.find((item) => {
          if (idCompleted === item.id) {
            return {
              ...item,
              isCompleted: !item.isCompleted,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };

    case actionTypes.REFACTOR_TASK:
      const idRefactor = action.payload;
      return {
        tasks: state.tasks.find((item) => {
          if (idRefactor === item.id) {
            return {
              ...item,
              isEditing: !item.isEditing,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };
    default:
      throw Error("you must be so clever to solve this problem !!!!");
  }
}
