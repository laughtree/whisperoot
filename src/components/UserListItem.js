
function UserListItem({ user, onClick, online }) {
  return (
    <div className="user-list-item" onClick={() => onClick(user)}>
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <div className="user-info">
        <h3>{user.name}</h3>
      </div>
      <div className="user-status">
        {online ? <span className="status-online">Online</span> : <span className="status-offline">Offline</span>}
      </div>
    </div>
  );
}

export default UserListItem;