import React from 'react';
import './Portfolio.css';

function Task6() {
    return (<>
        <a href="https://github.com/swetankpathak/website" style={{ position: "absolute", right: "5px", top: "5px", color: "white" }} className="sourceCodeLink">Source Code</a>
        <div className="portfolio px-3 py-3">
            <table cellspacing="35">
                <tr>
                    <td><img className="profilePicture" src="https://raw.githubusercontent.com/guptasajal411/cv/main/images/sajalGupta.png" alt="Profile Picture" height="250" /></td>
                    <td>
                        <h1 className="name">Swetank Pathak</h1>
                        <p><em>CS Senior at VIT Bhopal. </em></p>
                        <p></p>
                    </td>
                </tr>
            </table>
            
        </div>
    </>
    );
}

export default Task6;
