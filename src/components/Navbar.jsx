"use client"
import { CartProvider } from '../components/CartContext';
import CartIcon from '../components/CartIcon';
import CartModal from '../components/CartModal';
import { useCart } from '../components/CartContext';
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "", href: "/" },
  { text: "Shop", href: "/shop" },
  { text: "Courses", href: "/courses" },
  { text: "About", href: "/about" },
  { text: "Book Now", href: "/booking" },
  { text: "Login", href: "/login" },
  { text: "Live", href: "/" }
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const isCartOpen = useCart();


  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <nav className="nav" style={{ background: 'hsla(240, 11%, 93%, 1)' }}>
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

            <CartProvider>
              <div className={`main-content ${isCartOpen ? 'shifted' : ''}`}>
                <CartIcon />
                <CartModal />
              </div>
            </CartProvider>
            
          </div>
        
      </nav>
    </header>
  );
};

export default Navbar;