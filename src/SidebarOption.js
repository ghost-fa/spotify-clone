import React from "react";
import "./SidebarOption.css";
function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      <h1>{title}</h1>
    </div>
  );
}

export default SidebarOption;
