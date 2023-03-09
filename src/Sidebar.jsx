import { useState } from "react";
import { SidebarData } from "./data";
export default function Sidebar() {
  const [menuData, setMenuData] = useState([]);
  const [subMenuTopOffset, setSubMenuTopOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuExpand = (e, item) => {
    setSubMenuTopOffset(e.clientY);
    if (item.label == menuData.label) {
      setIsMenuOpen(false);
      setMenuData([]);
    } else {
      setIsMenuOpen(true);
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
      {isMenuOpen && (
        <div className="expand-menu" style={{ top: `${subMenuTopOffset}px` }}>
          <ul className="side-bar-list">
            {menuData?.link?.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
