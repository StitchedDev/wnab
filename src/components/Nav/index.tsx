import { PropsWithChildren } from "react";
import Navbar from "./Bar";
import NavContainer from "./Container";
import NavLink from "./Link";
import { useUser } from "@auth0/nextjs-auth0/client";

interface NavProps {}

const Nav = (props: PropsWithChildren<NavProps>) => {
  const { user } = useUser();

  return (
    <Navbar>
      <NavContainer>
        <h1 className={`font-bold text-2xl nav-logo`}>WNAB</h1>
      </NavContainer>

      <NavContainer>
        <NavLink to="/">🏠 Home</NavLink>
        <NavLink to="/budget">💸 Budgets</NavLink>
        {!user ? (
          <NavLink to="/api/auth/login" type="anchor">
            🧑‍🦲 Login
          </NavLink>
        ) : (
          <NavLink to="/api/auth/logout" type="anchor">
            ❌ Logout
          </NavLink>
        )}
      </NavContainer>
    </Navbar>
  );
};

export default Nav;
