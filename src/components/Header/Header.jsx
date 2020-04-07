import React from 'react'
import styles from "./header.module.css"
import virus from "../../virus.jpg"

const Header = () => {
    return (
        <div>
            <header id={
                styles.mainHeader
            }>
                <img src={virus}
                    alt=""
                    id={
                        styles.virusPic
                    }/> {}
                <h1 id={
                    styles.logoFont
                }>COVIDSTAT-19</h1>
            </header>
        </div>
    )
}

export default Header;
