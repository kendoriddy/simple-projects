import Link from "next/link";
import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link href="/">
        <a className="navbar-brand">SuperHero Identity</a>
      </Link>
      <Link href="/new">
        <MDBBtn color="primary">Create New Identity</MDBBtn>
      </Link>
    </nav>
  );
};

export default Navbar;
