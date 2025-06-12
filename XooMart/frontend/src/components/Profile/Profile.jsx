import React from "react";
import { useUserContext } from "../../context/UserContext";
import "./profile.css"; 

const UserProfile = () => {
  const { user } = useUserContext();

  if (!user) {
    return <div className="no-user">User not logged in.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        {user.shopImage ? (
          <img src={user.shopImage} alt="Shop" className="profile-image" />
        ) : (
          <div className="profile-image placeholder">🏪</div>
        )}

        <h2 className="profile-name">{user.fullname}</h2>
        <p className="profile-email">{user.email}</p>

        <div className="profile-info">
          <div><strong>Username:</strong> @{user.username}</div>
          <div><strong>Shop Name:</strong> {user.shopname}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
