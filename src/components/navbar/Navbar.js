import React from 'react';
import './Navbar.css';
import { Person, Mail } from '@material-ui/icons';
import Switches from '../switch/Switches';

function Navbar({ darkTheme, setDarkTheme }) {
    return (
        <div className={"navbar " + (darkTheme && "dark")}>     {/* when darktheme is active the className contains two classes card and dark */}
            <div className="wrapper">
                {/* left portion of navbar contains logo and contact */}
                <div className="left">
                    <a href="#intro" className='logo'>revirt.space</a>
                    <div className="container">
                        <div className="itemContainer">
                            <Person className="icon" />
                            {/* onclicking the number, website will redirect to the phone and the user is just a click away to call for services */}
                            <a href="tel:+918529088675">+918529088675</a>
                        </div>
                        <div className="itemContainer">
                            <Mail className="icon" />
                            {/* onclicking the email, website will redirect to the mail app and the user can send mail to the office  */}
                            <a href="mailto:office@revirt.space?subject=Message From The Website">office@revirt.space</a>
                        </div>
                    </div>
                </div>
                {/* right portion of the navbar contains the toogle for the light/dark mode */}
                <div className="right">
                    <Switches className="toogle" darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                </div>
            </div>
            <div className="mobile-contact">
                <div className="container">
                    <div className="itemContainer">
                        <Mail className="icon" />
                        {/* onclicking the email, website will redirect to the mail app and the user can send mail to the office  */}
                        <a href="mailto:office@revirt.space?subject=Message From The Website">office@revirt.space</a>
                    </div>
                    <div className="itemContainer">
                        <Person className="icon" />
                        {/* onclicking the number, website will redirect to the phone and the user is just a click away to call for services */}
                        <a href="tel:+918529088675">+918529088675</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Navbar
