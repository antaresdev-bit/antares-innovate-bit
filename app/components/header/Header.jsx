import Nav from "./Nav";
const Header = () => {
  return (
    <header className=" fixed top-0 z-50 mx-auto flex w-full items-center justify-between px-8 py-2">
      <Nav />
    </header>
  );
};

export default Header;
