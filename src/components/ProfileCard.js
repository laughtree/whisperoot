function ProfileCard({imgSrc, name, uid, status}) {
    return (
        <div className="profile-card">
            <img src={imgSrc} alt={`${name}'s avatar`} className="profile-avatar" />
            <div className="profile-info">
                <h3>{name}</h3>
                <p>UID: {uid}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    )
}

export default ProfileCard;