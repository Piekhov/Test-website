import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style/styleUsers.css";
import "./style/style.css";
import { setValue } from "../store/userSlice";
import { fetchUsers } from "../store/userSlice";
import avatarWoman3 from "./icons/avatarWoman3.svg";
import distanceNormal from "./icons/distanceNormal.svg";
import moreVertikal from "./icons/moreVertikal.svg";
import { Link } from "react-router-dom";
import Page from "./page";

function UserItem() {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="allTickets">
      <div className="allTicketsSheet">
        <div className="allTicketsAllUsers">All users</div>
        <div className="allTicketsTableTop">
          <div className="allTicketsUsersDetailes">Users detailes</div>
          <div className="allTicketsCompanyName">Company name</div>
          <div className="allTicketsEmail">Email</div>
          <div className="allTicketsDistance">Distance</div>
        </div>
        <div className="allTicketsBoxTest">
          {users.map((user) => (
            <div>
              <Link to={`/users/${user.id}`}>
                <div className="userBoxTest" key={user.id}>
                  <div className="userDetailsTest">
                    <div className="usersNameAvatar">
                      <Link to={`/users/${user.id}`}>
                        <img src={avatarWoman3} alt="avatarWoman3" />
                      </Link>
                    </div>
                    <div className="textUser">
                      <span className="">
                        <Link to={`/users/${user.id}`} className="textUserName">
                          {user.name}
                        </Link>
                      </span>
                      <br />
                      <span className="">
                        <Link
                          to={`/users/${user.id}`}
                          className="contentTicketInformationCity"
                        >
                          {user.address.city}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="userCompanyTest">
                    <div className="textUser">
                      <span>
                        <Link to={`/users/${user.id}`} className="textUser">
                          {user.company.name}
                        </Link>
                      </span>
                      <br />
                      <span className="contentTicketInformation">
                        <Link
                          to={`/users/${user.id}`}
                          className="contentTicketInformation"
                        >
                          {user.company.bs}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="userEmailTest">
                    <div className="textUser">
                      <span>
                        <Link to={`/users/${user.id}`} className="textUser">
                          {user.email}
                        </Link>
                      </span>
                      <br />
                      <span className="contentTicketInformation">
                        <Link
                          to={`/users/${user.id}`}
                          className="contentTicketInformation"
                        >
                          {user.website}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="userDistanceTest">
                    <div className="">
                      <Link to={`/users/${user.id}`}>
                        <img src={distanceNormal} alt="distanceNormal" />
                      </Link>
                    </div>
                  </div>
                  <div className="iconMoreVertical">
                    <Link to={`/users/${user.id}`}>
                      <img
                        src={moreVertikal}
                        className="iconMoreVertical"
                        alt="moreVertikal"
                      />
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserItem;
