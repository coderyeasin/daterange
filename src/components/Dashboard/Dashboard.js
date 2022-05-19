import React from "react";
import BarChart from "./BarChart/BarChart";
import "../../sass/style.scss";
import {
  AiFillDashboard,
  AiOutlineUsergroupAdd,
  AiOutlineUserAdd,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";


const Dashboard = () => {
  return (
    <div>
      <div className="user_info gap-3">
        <div className="aside_menu">
          <nav>
            <ul>
              <li>
                <AiFillDashboard className="icon" /> Dashboard
              </li>
              <li >
                <AiOutlineUsergroupAdd className="icon" /> User info
              </li>
              <li >
                <AiOutlineUserAdd className="icon" /> Profile
              </li>
              <li >
                <AiFillSetting className="icon" /> Settings
              </li>
              <li >
                <AiOutlineLogout className="icon" /> Logout
              </li>
            </ul>
          </nav>
        </div>
        <div className="content_here">
          <h3>Randomly change this Bar chart</h3>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
