import React from "react";

class Header extends React.Component{
    render() {
        return(
            <header id="header">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-content">
                            <div className="navbar-logo">
                                <a href="/logo"><img src="./img/movie-app-logo.png" width="70" alt="Movia App Logo" /></a>
                            </div>
                            <div className="navbar-menu">
                                <ul>
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/kategoriya">Kategoriya</a></li>
                                    <li><a href="/search">Search</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="hero">
                    <div class="banner-one">
                        <div className="banner-opacity">
                            <a href="/into"><img src="./img/movie-player.png" alt="Movie Player Logo" /></a>
                            <h1>Qora Pantera 2: Wakanda Forever</h1>
                        </div>
                    </div>
                    <div class="banner-two">
                        <div className="banner-opacity">
                                <a href="/into"><img src="./img/movie-player.png" alt="Movie Player Logo" /></a>
                                <h1>She Hulk</h1>
                            </div>
                        </div>
                    <div class="banner-three">
                        <div className="banner-opacity">
                                <a href="/into"><img src="./img/movie-player.png" alt="Movie Player Logo" /></a>
                                <h1>I'm Groot</h1>
                            </div>
                        </div>
                </section>
            </header>
        );
    }
}

export default Header;