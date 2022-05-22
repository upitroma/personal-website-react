import { Link } from "react-router-dom";

import classes from './NavBar.module.css';


function NavBar(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>wow a navbar</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="https://github.com/upitroma/personalWebsite" target="_blank" rel="noreferrer">Github</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;