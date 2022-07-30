import React from "react";
import Dashboard from './component/Dashboard'
import Users from './component/Users'
import TicketsTasks from './component/TicketsTasks'
import './component/style/style.css'
import UserItem from "./component/UserItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/userSlice";
import { Route, Routes } from "react-router-dom";
import Page from "./component/page";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  },[dispatch]);

  return (
    <div className="list">
      <Dashboard/>
      <Users/>
      <TicketsTasks/>
      <Routes>
        <Route path="/" element={<UserItem/>}/>
        <Route path="/users/:id" element={<Page/>}/>
      </Routes>
    </div>
  );
}

export default App;
