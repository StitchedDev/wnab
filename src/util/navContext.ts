import { useState, createContext } from "react";

interface NavContextProps {
  activeLink: string;
  handleLinkClick: Function;
}

export const NavContext = createContext<NavContextProps>({} as NavContextProps);

export default function navContext() {
  const [activeLink, setActiveLink] = useState<string>("/");

  const handleLinkClick = (link: string): void => {
    if (!link) return;

    setActiveLink(link);
  };

  return { activeLink, handleLinkClick };
}
