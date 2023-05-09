import { PropsWithChildren } from "react";
interface NavContainerProps {
  className?: string;
}

const NavContainer = (props: PropsWithChildren<NavContainerProps>) => {
  return (
    <div className={`${props.className || ""}`.trim()}>{props.children}</div>
  );
};

export default NavContainer;
