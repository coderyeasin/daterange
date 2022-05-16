import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="user_info gap-3">
        <div className="aside_menu">
          <nav>
            <ul>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
                Dashboard
              </li>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
                User info
              </li>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
                Profile
              </li>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
             Settings
              </li>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
            Logout
              </li>
            </ul>
          </nav>
        </div>
        <div className="content_here">
          <h3>Bar Chart</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
