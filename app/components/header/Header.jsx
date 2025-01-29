import Logo from "./Logo";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="bg-black bg-opacity-70 fixed top-0 z-50 mx-auto flex w-full items-center justify-between px-8 py-2">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
