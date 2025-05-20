export default function AppReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }

    case "changed": {
      const index = draft.findIndex((item) => item.id === action.task.id);
      draft[index] = action.task;
      break;
    }

    case "deleted": {
      return draft.filter((item) => item.id !== action.id);
    }

    default: {
      throw Error(`nothing mATCH with ${action.type}`);
    }
  }

  //   if (action.type === "added") {
  //     return [
  //       ...tasks,
  //       {
  //         id: action.id,
  //         text: action.text,
  //         done: false,
  //       },
  //     ];
  //   } else if (action.type === "changed") {
  //     return tasks.map((t) => {
  //       if (t.id === action.task.id) {
  //         return action.task;
  //       } else {
  //         return t;
  //       }
  //     });
  //   } else if (action.type === "deleted") {
  //     return tasks.filter((item) => item.id !== action.id);
  //   } else {
  //     throw Error(`nothing mATCH with ${action.type}`);
  //   }
}
