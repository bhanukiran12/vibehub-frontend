import React from 'react';
import { FaNewspaper, FaUserFriends, FaUsers, FaCalendarAlt } from 'react-icons/fa';


const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      {/* Profile Card */}
      <div className="profile-card">
        <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic" />
        <h4>John Doe</h4>
        <button className="status-btn">Update Status</button>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <div className="nav-item">
          <FaNewspaper /> News Feed
        </div>
        <div className="nav-item">
          <FaUserFriends /> Friends
        </div>
        <div className="nav-item">
          <FaUsers /> Groups
        </div>
        <div className="nav-item">
          <FaCalendarAlt /> Events
        </div>
      </nav>

      {/* Trending Topics */}
      <div className="trending-topics">
        <h4>Trending Topics</h4>
        <ul>
          <li>#Technology</li>
          <li>#Health</li>
          <li>#Entertainment</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
