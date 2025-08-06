import { getTodos } from "@/api/todos";
import { Todos } from "@/types/todos";
import { useEffect, useState } from "react";

import cls from "./Todos.module.css";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  useEffect(() => {
    getTodos()?.then((res) => {
      setTodos(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1>Todos</h1>
      <div className={cls.todosContainer}>
        {todos.map((todo) => (
          <div key={todo.id} className={cls.todo}>
            <div className={cls.todoInfo}>
              <div className={cls.todoId}>ID: {todo.id}</div>
              <h3 className={cls.todoTitle}>{todo.title}</h3>
            </div>
            <div className={`${cls.todoStatus} ${todo.completed ? cls.completed : cls.pending}`}>
              {todo.completed ? 'Completed' : 'Pending'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosPage;
