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
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Dashboard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()
  const handleLogout = () => {
    if (logOut) {
      navigate("/home");
    }
    
  }
  return (
    <div>
      <div className="user_info gap-3">
        <div className="aside_menu">
          <nav>
            <ul>
              <li>{user?.email}</li>
              <li>
                <AiFillDashboard className="icon" /> Dashboard
              </li>
              <li>
                <AiOutlineUsergroupAdd className="icon" /> User info
              </li>
              <li>
                <AiOutlineUserAdd className="icon" /> Profile
              </li>
              <li>
                <AiFillSetting className="icon" /> Settings
              </li>
              <li>
                <button onClick={handleLogout}>
                  <AiOutlineLogout className="icon" /> Logout
                </button>
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
