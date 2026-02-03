export default function UserList({ users }) {
  return (
    <>
      {users.map((user, index) => (
        <div key={index} className="user-item">
          {user}
        </div>
      ))}
    </>
  );
}
