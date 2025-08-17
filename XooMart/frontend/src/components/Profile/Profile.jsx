import React from "react";
import UserContext from "../../context/UserContext.js";
import { useContext, useState} from "react";
import "./profile.css"; 
import { NavLink} from 'react-router-dom';


const UserProfile = ({ onClick}) => {

  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);

  const style = {
    background: 'linear-gradient(135deg, #9F44D3, #7B1FA2)',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: hovered
      ? '0 6px 20px rgba(0, 0, 0, 0.3)'
      : '0 4px 14px rgba(0, 0, 0, 0.2)',
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
  };

  const style1 = {
    background: 'linear-gradient(135deg, #9F44D3, #7B1FA2)',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: hovered1
      ? '0 6px 20px rgba(0, 0, 0, 0.3)'
      : '0 4px 14px rgba(0, 0, 0, 0.2)',
    transform: hovered1 ? 'scale(1.05)' : 'scale(1)',
  };
  const { user } = useContext(UserContext);
 
  if (!user) {
    return <div className="no-user">User not logged in.</div>;
  }

  return (
   <>
   
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
    <div id="button-container">
            <NavLink className="navlink" to="/addProduct">
            <button style={style} onClick={onClick}  onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            Add Product
          </button></NavLink>
          <NavLink className="navlink" to="/myProduct">
            <button style={style1} onClick={onClick}  onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}>
            My Products
          </button>
          </NavLink>
    </div>
      </div>
    </div>

   
   </>
    
  );
};

export default UserProfile;
