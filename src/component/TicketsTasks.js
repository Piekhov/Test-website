import React from "react";
import "./style/style.css";
import "./style/styleUsers.css";
import tasksIcon from "./icons/tasksIcon.svg";
import checkbox from "./icons/checkbox.svg";
import activeCheckbox from "./icons/activeCheckbox.svg";

function TicketsTasks() {
  return (
    <div className="ticketsTasks">
      <div className="unresolvedTickets">
        <div className="unresolvedTicketsCardsDefault"></div>
        <div className="unresolvedTicketsSheet"></div>
        <div className="unresolvedTicketsButton">
          <div className="unresolvedTicketsButtonText">View details</div>
        </div>
        <div className="unresolvedTicketsText">Unresolved tickets</div>
        <div className="groupSupport">
          <p>
            Group: <b className="text">Support</b>
          </p>
        </div>
        <div>
          <div className="unresolvedTicket_1">
            <div className="unresolvedTicket_1_Text">
              Waiting on Feature Request
            </div>
            <div className="unresolvedTicket_1_Number">4238</div>
            <div className="unresolvedTicketsDividerLine">
              <div className="unresolvedTicketsDivider"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="unresolvedTicket_2">
            <div className="unresolvedTicket_2_Text">
              Awaiting Customer Response
            </div>
            <div className="unresolvedTicket_2_Number">1005</div>
            <div className="unresolvedTickets_2_DividerLineBox">
              <div className="unresolvedTickets_2_Divider"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="unresolvedTicket_3">
            <div className="unresolvedTicket_3_Text">
              Awaiting Developer Fix
            </div>
            <div className="unresolvedTicket_3_Number">914</div>
            <div className="unresolvedTickets_3_DividerLineBox">
              <div className="unresolvedTickets_3_Divider"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="unresolvedTicket_4">
            <div className="unresolvedTicket_4_Text">Pending</div>
            <div className="unresolvedTicket_4_Number">281</div>
          </div>
        </div>
      </div>
      <div className="tasks">
        <div className="tasksSheet"></div>
        <div className="tasksButtonBox">
          <div className="tasksButtonText">View all</div>
        </div>
        <div className="tasksTasks">Tasks</div>
        <div className="tasksToday">Today</div>
        <div className="tasksCreate">
          <div className="tasksCreateText">Create new task</div>
          <div className="tasksIcon">
            <img src={tasksIcon} alt="tasksIcon" />
          </div>
          <div className="tasksCreateDividerBox">
            <div className="tasksCreateDividerLine"></div>
          </div>
        </div>
        <div className="tasksTask_2">
          <div className="tasksTask_2_Text">Create new ticket example</div>
          <div className="tasksTask_2_chipBox">
            <div className="tasksTask_2_chipSheet"></div>
            <div className="tasksTask_2_chipTitle">NEW</div>
          </div>
          <div className="tasksTask_2_checkBox">
            <img src={checkbox} alt="checkbox" />
          </div>
          <div className="tasksTask_2_dividerBox">
            <div className="tasksTask_2_dividerLine"></div>
          </div>
        </div>
        <div className="tasksTask_1">
          <div className="tasksTask_1_Text">Finish ticket update </div>
          <div className="tasksTask_1_chipBox">
            <div className="tasksTask_1_chipSheet"></div>
            <div className="tasksTask_1_chipTitle">URGENT</div>
          </div>
          <div className="tasksTask_1_checkBox">
            <img src={checkbox} alt="checkbox" />
          </div>
          <div className="tasksTask_1_dividerBox">
            <div className="tasksTask_1_dividerLine"></div>
          </div>
        </div>
        <div className="tasksTask_3">
          <div className="tasksTask_1_Text">Update ticket report</div>
          <div className="tasksTask_1_chipBox">
            <div className="tasksTask_3_chipSheet"></div>
            <div className="tasksTask_3_chipTitle">DEFAULT</div>
          </div>
          <div className="tasksTask_1_checkBox">
            <img src={activeCheckbox} alt="activeCheckbox" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TicketsTasks;
