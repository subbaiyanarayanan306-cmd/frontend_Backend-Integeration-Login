import React from "react";

const Header = ({email}) => {
  return (
    <div>
      <h1 className="text-2xl font-medium">Hello  {email}!</h1>
      <p>I help you manage your activities :)</p>
    </div>
  );
};

export default Header;
