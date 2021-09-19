import React from 'react';
import './Footer.css'

function footer({ darkTheme }) {
    return (
        <div className={"footer " + (darkTheme && "dark")}> {/* when darktheme is active the className contains two classes card and dark */}
            <h3>Made with ❤️️ by Himanshu Pal</h3>
        </div>
    )
}

export default footer
