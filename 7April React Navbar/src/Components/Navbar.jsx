import React from 'react';
import Button from "./Button";
import Link from "./Link";
import Logo from "./Logo";
import "../App.css";

function Navbar() {
    const link = ["Services", "Projects", "About"];

    return (
        <div className="Navbar">
            <Logo />
            <Link link={link} />
            <Button />

        </div>
    )
}

export default Navbar;