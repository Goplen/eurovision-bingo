import "./Header.css"
import React from "react";
import {createCards} from "../Bingo/Cards";

const Header: React.FC = () => {
    return (
        <>
            <div className="header">
                <div className="header-content">
                    <div className="header-content">
                        <a className="name-role" href="https://www.goplen.dev/">
                            <div className="name">
                                <h1>MARCUS GOPLEN</h1>
                            </div>
                            <div className="role">
                                <h1>/ SOFTWARE DEVELOPER</h1>
                            </div>
                        </a>
                        <div className="navigation" onClick={() => createCards()}>
                            <div
                                className="navigation-item one"
                            >
                                <h1>SHUFFLE AND RESET</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
