import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import "./style/stylePage.css";
import clark from "./icons/clark.svg";
import avatarWoman3 from "./icons/avatarWoman3.svg";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../store/userSlice";

function Page() {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    let findUser = users.filter((e) => e.id == id);
    setUser(findUser[0]);
  }, [users]);

  return (
    <div className="pageAllBox">
      <div className="pageAllBoxSheet">
        <div>
          <img src={clark} alt="clark" />
        </div>
        <div className="avatar">
          <img src={avatarWoman3} alt="avatarWoman3" />
        </div>
        <div>{user && <div className="pageName">{user.name}</div>}</div>
        {user && (
          <div className="pageCatchPhrase">{user.company.catchPhrase}</div>
        )}

        <div className="pageAddressText">Address</div>
        <div>
          {user && (
            <div className="pageAddressFull">
              <span>{user.address.street}</span>,{" "}
              <span>{user.address.suite}</span> <span>{user.address.city}</span>
              , <span>{user.address.zipcode}</span>
            </div>
          )}
        </div>
        <div className="pagePhoneText">Phone</div>
        {user && <div className="pagePhoneNumber">{user.phone}</div>}

        <div className="pageWebsiteText">Website</div>
        {user && <div className="pageWebsiteAddress">{user.website}</div>}
      </div>
    </div>
  );
}

export default Page;
