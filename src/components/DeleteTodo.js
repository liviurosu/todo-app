import React, { useState } from 'react';
import Axios from 'axios';

function DeleteTodo() {
  const [idToDelete, setIdToDelete] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      await Axios.delete(`http://localhost:4200/deleteTodo${id}`);
      setMessage('Todo deleted successfully');
      setIdToDelete('');
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <h2>Delete Todo</h2>
      <div className="form-group">
        <label>Todo ID to Delete:</label>
        <input
          type="text"
          className="form-control"
          value={idToDelete}
          onChange={(e) => setIdToDelete(e.target.value)}
        />
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete Todo
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteTodo;