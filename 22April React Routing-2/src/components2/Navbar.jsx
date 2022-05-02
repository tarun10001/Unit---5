import { Link } from "react-router-dom"
import "./Homepage.css"

const Navbar = () => {
    const navArr = [
        { "title": "Planets", to: "/products/planets" },
        { "title": "Category 2", to: "" },
        { "title": "Category 3", to: "" },
        { "title": "Category 4", to: "" }
    ]
    return (
        <nav className="navbar">
            <img src="http://assets.stickpng.com/images/58482f8fcef1014c0b5e4a85.png" alt="logo"></img>

            {navArr.map((e) => {
                return (
                    <Link to={e.to}>
                        <li>{e.title}</li>
                    </Link>
                )
            })}
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart"></img>
        </nav>
    )
}

export { Navbar }