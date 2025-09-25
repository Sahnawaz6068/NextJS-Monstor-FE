"use client";

import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: String;
  description: String;
}

const ClientDataFeatching = () => {
  const [todo, setTodos] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch the data");
        }

        const data = await response.json();
        setTodos(data);
      } catch (err) {
        if(err instanceof Error){
            setError(err.message)
        }
      }finally{
        setLoading(false)
      }
    };
    fetchData()
  }, []);

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error ..{error}</div>
  }
  if(todo){
    return(<div>
        <h1>Todo</h1>
        <p>
            <strong>ID:{todo.id}
                <h1>Title:{todo.title}</h1>
                <h2>{todo.userId}</h2>
            </strong>
        </p>
    </div>)
  }
  return null;
};

export default ClientDataFeatching;
