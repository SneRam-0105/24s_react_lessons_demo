// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (<div>
        <h2>React demo app</h2>
        <nav>
            <ul>
                <li><NavLink to="/"> List</NavLink></li>

                <li><NavLink to="about"> About </NavLink></li>


            </ul>

        </nav>

    </div >
    );
};

export default Header;