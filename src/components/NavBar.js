import { Link } from "react-router-dom";

import classes from './NavBar.module.css';


function NavBar(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>wow a navbar</div>
            <nav>
                <ul>
                    <li><Link to="/">All Meetups</Link></li>
                    <li><Link to="/new">New Meetups</Link></li>
                    <li><Link to="/favorites">New Meetup</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;