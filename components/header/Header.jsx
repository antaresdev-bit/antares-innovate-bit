"use client";
import Nav from "./Nav";
const Header = () => {
  return (
    <header
      className="fixed top-0 z-50 left-0 right-0 mx-auto flex w-full max-w-[1500px] items-center justify-between px-8 py-2"
      style={{ fontFamily: "UniteaSans-semi-bold", fontSize:"17.45" }}
    >
      <Nav />
    </header>
  );
};

export default Header;
/*
<header className="max-w-[1500px] mx-auto">
*/
