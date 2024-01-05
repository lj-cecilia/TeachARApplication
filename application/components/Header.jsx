import React from 'react';


export const Header = () => {
    return <>
        <div className="Header">
            <h1>TeachAR</h1>
            {/* <img src="/teach_ar_logo.png" alt="TeachAR Logo" /> */}
            <div className="HeaderLink">
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div >
    </>
}