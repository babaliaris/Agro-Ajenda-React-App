import React from "react";
import styles from './TopBar.module.css';

type TopBarProps = {
    title: string,
    logo: string,
    children?: React.ReactNode
};


function TopBar({title, logo, children}: TopBarProps)
{

    return (
        <div className={styles.container}>

            <div className={styles.logo_column}>
                <i className={`${styles.logo} ${logo}`}/>
            </div>

            <div className={styles.title_column}>
                <h1 className={styles.title}>{title}</h1>
            </div>

            <div className={styles.children_column}>
                {children}
            </div>

        </div>
    );
}

export default React.memo(TopBar);