import React from 'react';
import Card from '../card/Card';
import './Panel.css';

function Panel({ data, darkTheme }) {
    return (
        <div className='panel'>
            <div className="card-container">

                {/* data fetched from the api is to be used inside the card */}
                {data.length && data.map((d) => (
                    <Card 
                        // not using the images from the api as they are of very low quality, jut took a random image from unsplash.com 
                        img="https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" 
                        name={d.first_name + " " + d.last_name} 
                        email={d.email}
                        darkTheme={darkTheme}
                    />
                ))}
            </div>
        </div>
    )
}

export default Panel
