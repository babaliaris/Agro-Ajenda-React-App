import React from "react";
import styles from './Toolbar.module.css';
import {ICONS} from '../../core/icons';

function Toolbar()
{
    return (
        <div className={styles.container}>
            
            <div className={styles.logo_column}>
                <i className={`${ICONS.toolbox} ${styles.logo}`}></i>
            </div>

            <div className={styles.items_column}>
                <i className="fa-solid fa-up-down-left-right"></i>
                <i className="fa-solid fa-play"></i>
                <i className="fa-solid fa-forward-fast"></i>
                <i className="fa-solid fa-right-from-bracket"></i>
            </div>

        </div>
    );
}

export default React.memo(Toolbar);