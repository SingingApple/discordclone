import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Skibi Programmer</h3>
        <ExpandMoreIcon></ExpandMoreIcon>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon></ExpandMoreIcon>
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel"></AddIcon>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
