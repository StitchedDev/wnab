import navContext, { NavContext } from "@/util/navContext";
import { PropsWithChildren } from "react";
interface NavbarProps {
  className?: string;
}

const Navbar = (props: PropsWithChildren<NavbarProps>) => {
  return (
    <NavContext.Provider value={navContext()}>
      <nav
        className={`flex justify-between px-10 py-5 text-xl ${
          props.className || ""
        }`.trim()}
      >
        {props.children}
      </nav>
    </NavContext.Provider>
  );
};

export default Navbar;
