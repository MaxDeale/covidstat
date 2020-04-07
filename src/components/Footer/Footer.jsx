import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div>
            <footer id={
                styles.mainFooter
            }>
                <a href="https://www.deale-development.com">
                    <img id={
                            styles.deale
                        }
                        src="https://www.deale-development.com/img/DealeLogo.png"
                        alt="no"/></a>
            </footer>
        </div>
    )
}

export default Footer;
