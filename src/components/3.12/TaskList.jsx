import Task from "./Task";
import { useTask } from "../../context/Taskcontext";

export default function TaskList() {
  const tasks = useTask();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ listStyle: "none" }}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

// function Task() {
//   const [isEditing, setIsEditing] = useState(false);
//   let taskContent;
//   if (isEditing) {
//     taskContent = (
//       <>
//         <input
//           value={task.text}
//           onChange={(e) => {
//             onChange({
//               ...task,
//               text: e.target.value,
//             });
//           }}
//         />
//         <button onClick={() => setIsEditing(false)}>Save</button>
//       </>
//     );
//   } else {
//     taskContent = (
//       <>
//         {task.text}
//         <button onClick={() => setIsEditing(true)}>Edit</button>
//       </>
//     );
//   }
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={task.done}
//         onChange={(e) => {
//           onChange({
//             ...task,
//             done: e.target.checked,
//           });
//         }}
//       />
//       {taskContent}
//       <button onClick={() => onDelete(task.id)}>Delete</button>
//     </label>
//   );
// }
