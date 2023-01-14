import React from "react";
import styles from './CenteredModalContainer.module.css';

type CenteredModalBodyProps = {
    children: React.ReactNode,
    onClose: ()=>void,
    style?: React.CSSProperties
};

function CenteredModalBody({children, onClose, style}:CenteredModalBodyProps)
{
    const onModalContainerClick = React.useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>
    {
        event.stopPropagation();
        onClose();

    }, [onClose]);

    return (
        <div
        className={styles.container}
        onClick={(event)=>onModalContainerClick(event)}
        >

            <div
            style={style}
            className={styles.modal_body}
            onClick={(event)=>event.stopPropagation()}
            >
                {children}
            </div>

        </div>
    );
}

export default React.memo(CenteredModalBody);