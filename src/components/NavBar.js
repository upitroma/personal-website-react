import { Link } from "react-router-dom";

import classes from './NavBar.module.css';


function NavBar(){
    return (
            <nav className={classes.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="https://github.com/upitroma/personalWebsite" target="_blank" rel="noreferrer">Github (old repo)</a></li>
                    <li><a href="https://github.com/upitroma/personal-website-react" target="_blank" rel="noreferrer">Github (current repo)</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
    );
}

export default NavBar;