import React from 'react'
import './preloader.css'

const Preloader = (props) => {

    return (
        <div className={props.isPreloaderIsActive ? "preloader" :  "preloader__disable"}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
