"use client";
import Nav from "./Nav";
const Header = () => {
  return (
    <header
      className="fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-full max-w-[1500px] flex items-center justify-between px-8 py-2"
      style={{ fontFamily: "UniteaSans-semi-bold", fontSize: "17.45px" }}
    >
      <Nav />
    </header>
  );
};

export default Header;
