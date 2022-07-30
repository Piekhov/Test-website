import React from "react";
import "./style/style.css";
import "./style/styleUsers.css";
import d from "./icons/d.svg";
import vector from "./icons/vector.svg";
import tickets from "./icons/tickets.svg";
import ideas from "./icons/ideas.svg";
import contacts from "./icons/contacts.svg";
import agents from "./icons/agents.svg";
import articles from "./icons/articles.svg";
import settings from "./icons/settings.svg";
import subscription from "./icons/subscription.svg";
import { fetchUsers } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="ellipse">
          <div>
            <img src={d} className="d" alt="d" />
          </div>
        </div>
      </div>
      <div className="dashboard">Dashboard</div>
      <div className="sidebarInActive">
        <div className="sidebarIcon">
          <div>
            <img src={vector} alt="vector" />
          </div>
        </div>
        <div className="title">Overview</div>
      </div>
      <div className="sidebarActive">
        <div className="sheet"></div>
        <div className="selected"></div>
        <div className="sidebarIcon">
          <div>
            <img src={tickets} alt="tickets" />
          </div>
        </div>
        <div>
          <div onClick={() => dispatch(fetchUsers())}>
            <Link to="/" className="titleUsers">
              Users
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="sidebarInActiveIdeas">
        <div className="sidebarIcon">
          <div>
            <img src={ideas} alt="ideas" />
          </div>
        </div>
        <div className="title"> Ideas</div>
      </div>
      <div className="sidebarInActiveContacts">
        <div className="sidebarIcon">
          <div>
            <img src={contacts} alt="contacts" />
          </div>
        </div>
        <div className="title">Contacts</div>
      </div>
      <div className="sidebarInActiveAgents">
        <div className="sidebarIcon">
          <div>
            <img src={agents} alt="agents" />
          </div>
        </div>
        <div className="title">Agents</div>
      </div>
      <div className="sidebarInActiveArticles">
        <div className="sidebarIcon">
          <div>
            <img src={articles} alt="articles" />
          </div>
        </div>
        <div className="title">Articles</div>
      </div>
      <div className="dividerLineHorizontal">
        <div className="divider"></div>
      </div>
      <div className="sidebarInActiveSettings">
        <div className="sidebarIcon">
          <div>
            <img src={settings} alt="settings" />
          </div>
        </div>
        <div className="title">Settings</div>
      </div>
      <div className="sidebarInActiveSubscription">
        <div className="sidebarIcon">
          <div>
            <img src={subscription} alt="subscription" />
          </div>
        </div>
        <div className="title">Subscription</div>
      </div>
    </div>
  );
}

export default Dashboard;
