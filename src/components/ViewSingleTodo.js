import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function ViewSingleTodo() {
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await Axios.get(`http://localhost:4200/getTodo/${id}`); 
        setTodo(response.data);
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    };

    fetchTodo();
  }, [id]);

  return (
    <div>
      <h2>View Todo</h2>
      <h3>Title: {todo.title}</h3>
      <p>Description: {todo.description}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default ViewSingleTodo;