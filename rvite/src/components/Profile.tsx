import React from "react";

interface User {
  id: number;
  name: string;
}

interface ProfileProps {
  user: User;
  logout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, logout }) => {
  return (
    <div className="profile-container">
      <h1>
        Hello, {user.name}! <span className="age">34</span>
      </h1>
      <span className="user-name">
        {user.name} <span className="status">logined</span>
      </span>
      <button onClick={logout} className="logout-button">
        SignOut
      </button>
    </div>
  );
};

export default Profile;
