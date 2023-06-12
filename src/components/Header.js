import React from 'react'
import meme_face from '../images/meme_face.png'

export default function Header(){
    return(
        <div className="header">
            <div className="header--title">
                <img className="header--img"src={meme_face}></img>
                <h3>Meme Generator</h3>
            </div>
            <p className="header--about">React Course - Project 3</p>
        </div>
    )
}