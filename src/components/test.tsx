import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("失敗");
                }
                const data: User[] = await response.json();
                setUsers(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>読み込み中...</div>
    }
    if (error) {
        return <div>エラー：{error}</div>
    }

    return (
        <div>
            <h1>ユーザー一覧</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong>({user.email})
                    </li>
                ))}
            </ul>
        </div>
    )
};