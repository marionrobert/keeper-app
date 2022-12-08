import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();

    return <footer>
        <p>Designed by Marion Robert in WebDev Bootcamp from Angela Yu - {currentYear} </p>
    </footer>
}

export default Footer;