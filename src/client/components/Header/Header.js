import React from "react";
import {MenuLinks} from "../../../routers";
import {Link} from "react-router-dom";

import styles from  "./styles.css"


const Header = (props) => {

    return (
        <div className={styles.Header}>


            {
                MenuLinks.map((menu, index) => (
                    <Link to={menu.url} key={index}>{menu.menuText}</Link>
                ))
            }
        </div>
    );

}

export default  (Header);