import React from "react";

interface LinksProps {
  links: string[];
}
export const Header: React.FC<LinksProps> = ({links}: LinksProps) => {
  return (
    <div>
      {links?.map((link) => (
        <ul>
          <li><a href={"/"+ link.toLowerCase()}>{link}</a></li>
        </ul>
      ))}
    </div>
  )
}