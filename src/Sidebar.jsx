import { useState } from "react";
import { SidebarData } from "./data";
export default function Sidebar() {
  const [menuData, setMenuData] = useState([]);

  const onMenuExpand = (e, item) => {
    console.log(e);
    const menu = document.querySelector("#expandable-menu-id");
    if (item.label == menuData.label) {
      menu.className = "collapse-menu";
      menu.style.top = "0";
      setMenuData([]);
    } else {
      menu.className = "expand-menu";
      menu.style.top = `${e.clientY}px`;
      setMenuData(item);
    }
  };

  return (
    <>
      <div className="sidebar-container">
        <ul className="side-bar-list">
          {SidebarData?.map((item) => (
            <li
              key={item.label}
              onClick={(e) => (item.isSubMenu ? onMenuExpand(e, item) : null)}
            >
              <span>{item.label}</span>
              {item.isSubMenu ? <span>{`>`}</span> : null}
            </li>
          ))}
        </ul>
      </div>
      <div id="expandable-menu-id">
        <ul className="side-bar-list">
          {menuData?.link?.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
