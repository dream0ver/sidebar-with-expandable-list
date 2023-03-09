import { useState } from "react";
export default function Sidebar() {
  const LINKS = [
    {
      label: "Home",
      isSubMenu: false,
    },
    {
      label: "My Startup",
      isSubMenu: false,
    },
    {
      label: "Subscriptions",
      isSubMenu: true,
      subList: ["MKBHD", "Kurzgesagt", "Linus Tech Tips", "Short Circuit"],
    },
    {
      label: "History",
      isSubMenu: false,
    },
    {
      label: "Library",
      isSubMenu: true,
      subList: ["Liked", "Watch Later", "Uploads"],
    },
  ];
  const [list, setList] = useState([]);
  const [subMenuTopOffset, setSubMenuTopOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuExpand = (e, item) => {
    setSubMenuTopOffset(e.clientY);
    if (item.label == list.label) {
      setIsMenuOpen(false);
      setList([]);
    } else {
      setIsMenuOpen(true);
      setList(item);
    }
  };

  return (
    <>
      <div className="sidebar-container">
        <ul className="side-bar-list">
          {LINKS?.map((item) => (
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
      {isMenuOpen ? (
        <div className="expand-menu" style={{ top: `${subMenuTopOffset}px` }}>
          <ul className="side-bar-list">
            {list.subList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
