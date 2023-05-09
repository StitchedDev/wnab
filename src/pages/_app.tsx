import Navbar from "@/components/Nav/Bar";
import NavContainer from "@/components/Nav/Container";
import NavLink from "@/components/Nav/Link";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar>
        <NavContainer>
          <h1 className={`font-bold text-2xl nav-logo`}>WNAB</h1>
        </NavContainer>

        <NavContainer>
          <NavLink to="/">🏠 Home</NavLink>
          <NavLink to="/budget">💸 Budgets</NavLink>
        </NavContainer>
      </Navbar>
      <Component {...pageProps} />
    </>
  );
}
