function Task({ task, deleteTask, toggleComplete }) {
  return (
    <li 
      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      onClick={() => toggleComplete(task.id)}  // marca desmarca tarea completada
    >
      {task.text}
      <button onClick={(e) => {
        e.stopPropagation();  // evita que se active toggle al hacer clic en el boton
        deleteTask(task.id);  // elimina tarea
      }}>Eliminar</button>
    </li>
  );
}

export default Task;
