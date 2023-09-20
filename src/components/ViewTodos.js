import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ViewTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await Axios.get('http://localhost:4200/getTodos'); 
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>View Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <a href={`/todo/${todo.id}`}>{todo.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTodos;