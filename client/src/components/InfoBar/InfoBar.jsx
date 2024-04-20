import React from 'react'
import onlineIcon from "../icons/onlineIcon.png"
import closeIcon from "../icons/closeIcon.png"
import "./InfoBar.css"

const InfoBar = ({room}) => {
  return (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src={onlineIcon} alt='onlineImg' className="onlineIcon" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} className='closeIcon' alt='closeImg' /></a>
        </div>
    </div>
  )
}

export default InfoBar