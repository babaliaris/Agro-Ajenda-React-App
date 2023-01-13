import React from "react";
import styles from './ToolbarBtn.module.css';

type ToolbarBtnProps = {
    children: React.ReactNode,
    onClick: ()=>void
};

function ToolbarBtn({children, onClick}:ToolbarBtnProps)
{

    const onBtnClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>
    {
        event.stopPropagation();
        onClick();

    }, [onClick]);

    return (
        <button
        className={styles.container}
        onClick={(event)=>onBtnClick(event)}
        >
            {children}

        </button>
    );
}

export default React.memo(ToolbarBtn);