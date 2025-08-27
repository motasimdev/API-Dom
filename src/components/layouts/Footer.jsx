import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";

const Footer = () => {
  return (
    <>
    <Container>
        <div className="py-6 bg-teal-100">
        <ul className="flex items-center justify-center gap-x-3">
          <li className="hover:text-[#262626] text-[#767676] text-sm">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-[#262626] text-[#767676] text-sm">
            <Link to={"/shop"}>Shop</Link>
          </li>
        </ul>
      </div>
      </Container>
    </>
  );
};

export default Footer;
