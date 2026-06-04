import UserCard from "./UserCard";

function Question07() {
    const users = [
        { name: "山田太郎", age: 30, isActive: true },
        { name: "鈴木一郎", age: 25, isActive: false }
    ];
    return (
        <div>
            {users.map((user, index) => (
                <UserCard key={index} name={user.name} age={user.age} isActive={user.isActive} />
            ))}
            {/* <UserCard name="山田太郎" age={30} isActive={true} />
            <UserCard name="鈴木一郎" age={25} isActive={false} /> */}
        </div>
    )
}

export default Question07;