"use client"
import CartIcon from '../components/CartIcon';
import CartModal from '../components/CartModal';
import { useCart } from '../components/CartContext';
import React, { useState } from "react";
import NavItem from "./NavItem";
import '@clerk/nextjs';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Shop", href: "/shop" },
  { text: "Tutorials", href: "/tutorials" },
  { text: "About", href: "/about" },
  { text: "Account", href: "/sign-in" }
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { isCartOpen } = useCart();


  return (
    <header style={{ position: "sticky"}}>
      <nav className="nav" style={{ maxHeight: '20%', background: 'hsla(240, 11%, 93%, 1)' }}>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}
            style={{            
              margin: "0 auto",
              float: "right",
            }}>
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
          <div>

            
              <div className={`main-content ${isCartOpen ? 'shifted' : ''}`}>
                <CartIcon />
                <CartModal />
              </div>
            
            
          </div>
        
      </nav>
    </header>
  );
};

export default Navbar;