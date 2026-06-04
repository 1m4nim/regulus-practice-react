type UserCardProps = {
    name: string;
    age: number;
    isActive: boolean
};

function UserCard(props: UserCardProps) {
    return (
        <div className="user-card">
            <h2>{props.name}</h2>
            <p>Age:{props.age}</p>
            <p>Status:{props.isActive ? "アクティブ" : "非アクティブ"}</p>
        </div>
    );
}

export default UserCard;