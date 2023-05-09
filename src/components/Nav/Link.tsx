import { NavContext } from "@/util/navContext";
import Link from "next/link";
import { PropsWithChildren, useContext, useEffect, useState } from "react";

interface NavLinkProps {
  className?: string;
  to: string;
  type?: string;
}

const NavLink = (props: PropsWithChildren<NavLinkProps>) => {
  const { activeLink, handleLinkClick } = useContext(NavContext);

  const isLinkActive = (): boolean => {
    return props.to === activeLink;
  };

  if (props.type === "anchor") {
    return (
      <a
        href={props.to}
        className={`px-5 py-3 ${props.className || ""} ${
          (isLinkActive() && "active") || ""
        } `.trim()}
        onClick={() => handleLinkClick(props.to)}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link
      href={props.to}
      className={`px-5 py-3 ${props.className || ""} ${
        (isLinkActive() && "active") || ""
      } `.trim()}
      onClick={() => handleLinkClick(props.to)}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
