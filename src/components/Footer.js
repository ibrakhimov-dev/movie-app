import React from "react";

class Footer extends React.Component{
    render() {
        return(
            <footer id="footer">
                <h3>&copy; {new Date().getFullYear()} Copyright Reserved</h3>
            </footer>
        );
    }
}

export default Footer;