import "./Header.css"
import React from "react";

const Header: React.FC = () => {

    const showFocus = (menuItem: string): boolean => {
        const pathname = window.location.pathname;
        return menuItem === pathname;
    }

    return (
        <>
            <div className="header">
                <div className="header-content">
                    <div className="header-content">
                        <a className="name-role" href={"/"}>
                            <div className="name">
                                <h1>MARCUS GOPLEN</h1>
                            </div>
                            <div className="role">
                                <h1>/ SOFTWARE DEVELOPER</h1>
                            </div>
                        </a>
                        <div className="navigation">
                            <div
                                className="navigation-item one"
                                style={{textDecoration: showFocus("/") ? "underline" : "none"}}
                                onClick={() => window.location.href = '/'}
                            >
                                <h1>ABOUT ME</h1>
                            </div>
                            <div className="navigation-item two"
                                 style={{textDecoration: showFocus("/projects") ? "underline" : "none"}}
                                 onClick={() => window.location.href = '/projects'}
                            >
                                <h1>PROJECTS</h1>
                            </div>
                            <div className="navigation-item three"
                                 style={{textDecoration: showFocus("/contact") ? "underline" : "none"}}
                                 onClick={() => window.location.href = '/contact'}
                            >
                                <h1>CONTACT</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
