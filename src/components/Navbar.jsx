"use client"
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "", href: "/" },
  { text: "Shop", href: "/" },
  { text: "Course", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Login", href: "/" },
  { text: "Cart", href: "/" },
  { text: "Book Now", href: "/booking" }
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <nav className={`nav`} style={{ background: 'hsla(240, 11%, 93%, 1)' }}>
        <Link href={"/"}>
            <p className="logo" style={{marginLeft: "1rem", fontSize: "1.5rem"}}>Gallery Demo - Additional Text</p>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;