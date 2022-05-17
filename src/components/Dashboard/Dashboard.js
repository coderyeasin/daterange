import React from "react";
import BarChart from "./BarChart/BarChart";
import "./Dashboard.css";
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
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
                <AiFillDashboard /> Dashboard 
              </li>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
               <AiOutlineUsergroupAdd /> User info
              </li>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
               <AiOutlineUserAdd /> Profile
              </li>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
                <AiFillSetting /> Settings
              </li>
              <li className="my-3 text-success p-2 text-justify rounded-3 border-none">
              <AiOutlineLogout/>  Logout
              </li>
            </ul>
          </nav>
        </div>
        <div className="content_here">
          <h3>Bar Chart</h3>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
