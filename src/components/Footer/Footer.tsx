import React from 'react'
import './Footer.css'

function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <p className="footer__copyright">© {new Date().getFullYear()} Mikhail Bobrenko</p>
        </footer>
    );
}

export default Footer