import React from 'react'
import './Card.css'
import Tilt from '../../Tilt'

// Card compnent consists of all the card details fetched from the api and shows the required details on the card
// instead of repeating the jsx, create a new component Card and use it iteratively in the Panel

function Card({ img, name, email, darkTheme }) {

    // options for tilt.js for customizing according to the need
    const options = {
        scale: 1.05,
        speed: 300, // Speed of the enter/exit transition
        max: 30,    // max tilt rotation (degrees)
        glare: true, // introduces the glare effect
        "max-glare": 0.5, // opacity of the glared portion
      };

    return (
        <Tilt className="tilt" options={options}>
            <div className={"card " + (darkTheme && "dark")}> {/* when darktheme is active the className contains two classes card and dark */}
                <div className="img-box">
                    <img src={img} alt="" />
                </div>
                <div className="text-box">
                    <div className="name">
                        <h2>{name}</h2>
                    </div>
                    {/* If user wants to ask something from a particular person, he can send him/her mail by clicking on the email address*/}
                    <div className="email">
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

export default Card
