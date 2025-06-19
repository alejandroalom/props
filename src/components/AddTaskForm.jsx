import { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);  // llama a la funcion addTask pasandole el texot de la tarea nueva
      setTaskText('');  // limpia campo de texto despues de enviar
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Añadir nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddTaskForm;
