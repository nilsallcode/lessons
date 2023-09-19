"use client";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, getTodos } from "@/lib/axios/axios";

export default function Home() {

  const [task, setTask] = useState("");

  const todos = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  });

  const newTodo = useMutation({
    mutationFn: () => addTodo({ task: task }),
    onSuccess: todos.refetch
  });

  return (
    <div className="flex flex-col gap-6 px-24 py-8">
      <h1 className="text-4xl">Todo App</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} className="bg-gray-800 text-white p-2 rounded-xl outline-none" placeholder="Wash the dishes..." />
      <button onClick={() => newTodo.mutate()} className="bg-blue-500 p-2 rounded-xl">Add Task</button>
      <hr />
      <div className="flex flex-col gap-4">
        {todos.isLoading ? <p>Loading...</p> : null}
        {todos.isSuccess ? (
          <>
            {todos.data.length < 1 ? <p>No tasks added yet.</p> : null}
            {todos.data.map((todo, index) => (
              <div className="bg-gray-700 p-4 rounded-xl" key={index}>
                {todo.task}
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
