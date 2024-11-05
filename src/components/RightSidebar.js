import React from 'react';


const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Chat List */}
      <div className="chat-list">
        <h4>Recent Chats</h4>
        <div className="chat-item">
          <img src="https://via.placeholder.com/30" alt="Friend" className="chat-pic" />
          <div>
            <h5>Jane Smith</h5>
            <p>Last message preview...</p>
          </div>
        </div>
      </div>

      {/* Friend Suggestions */}
      <div className="friend-suggestions">
        <h4>People You May Know</h4>
        <div className="suggestion-item">
          <img src="https://via.placeholder.com/30" alt="Friend" className="suggestion-pic" />
          <div>
            <h5>Robert Brown</h5>
            <button className="add-friend-btn">Add Friend</button>
          </div>
        </div>
      </div>

      {/* Sponsored Content */}
      <div className="sponsored-content">
        <h4>Sponsored</h4>
        <p>Ad content here</p>
      </div>
    </div>
  );
};

export default RightSidebar;
