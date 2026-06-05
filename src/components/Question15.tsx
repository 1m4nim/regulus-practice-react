import { useState } from "react";
import { v4 as uuid } from "uuid";

type Todo = {
    id: string;
    text: string;
}

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleAddTodo = () => {
        if (inputValue.trim() === "") return;

        const newTodo: Todo = {
            id: uuid(),
            text: inputValue.trim(),
        };

        setTodos([...todos, newTodo]);
        setInputValue("");
    }

    const handleDeleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <h1>Todoリスト{todos.length}件</h1>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>追加</button>

            {
                todos.length === 0 ? (
                    <p>タスクがありません</p>
                ) : (
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                {todo.text}
                                <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default TodoList;