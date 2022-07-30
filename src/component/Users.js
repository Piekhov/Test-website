import React from "react";
import "./style/style.css";
import "./style/styleUsers.css";
import search from "./icons/search.svg";
import notifications from "./icons/notifications.svg";
import headerPhoto from "./icons/headerPhoto.svg";


function Users() {
  return (
    <div>
      <div className="bg"></div>
      <div className="header">
        <div className="titleUser">Users</div>
        <div className="headerIconSearch">
          <img src={search} alt="search" />
        </div>
        <div className="headerIconNotifications">
          <img src={notifications} alt="notifications" />
        </div>
        <div className="headerDividerLineVertical">
          <div className="headerDivider"></div>
        </div>
        <div className="headerName">Jones Ferdinand</div>
        <div className="headerPhoto">
          <img src={headerPhoto} alt="headerPhoto" />
        </div>
      </div>
      <div className="cards">
        <div>
          <div className="unresolved">
            <div className="unresolvedSheet">
              <div className="unresolvedText">60</div>
              <span className="unresolvedActive">Active</span>
            </div>
          </div>
        </div>
        <div>
          <div className="overdue">
            <div className="overdueCards"></div>
            <div className="overdueCardsSheet">
              <div className="overdueCardsText">16</div>
              <div className="overdueCardsOnline">Online</div>
            </div>
          </div>
        </div>
        <div>
          <div className="cardsFiltered">
            <div className="cardsFilteredSheet">
              <div className="cardsFilteredNumber">43</div>
              <div className="cardsFilteredText">Filtered</div>
            </div>
          </div>
        </div>
        <div>
          <div className="cardsBanned">
            <div className="cardsBannedSheet">
              <div className="cardsBannedNumber">64</div>
              <div className="cardsBannedText">Banned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
