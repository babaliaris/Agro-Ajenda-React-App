import React from "react";
import styles from './DisplayList.module.css';
import { ICONS } from "../../core/icons";


type DisplayListProps = {
    data: any[],
    getKey: (item: any)=>number,
    getLogo: (item: any)=>string,
    getText: (item: any)=>string,
    onClick?: (item: any)=>void
    onEdit?: (item: any)=>void
    onDelete?: (item: any, index?: number)=>void
};

function DisplayList({data, getKey, getLogo, getText, onClick, onEdit, onDelete}: DisplayListProps)
{

    const onItemClick = React.useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: any)=>
    {
        event.stopPropagation()
        if (onClick) onClick(item);

    }, [onClick]);


    const onItemEdit = React.useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>, item: any)=>
    {
        event.stopPropagation()
        if (onEdit) onEdit(item);

    }, [onEdit]);


    const onItemDelete = React.useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>, item: any, index: number)=>
    {
        event.stopPropagation()
        if (onDelete) onDelete(item, index);

    }, [onDelete]);

    return (
        <div className={styles.container}>
            
            {
                data.map( (item, index)=>
                {
                    return (
                        <div className={styles.list_item} key={getKey(item)}
                        onClick={(event)=>onItemClick(event, item)}
                        >

                            <div className={styles.logo_column}>
                                <i className={`${getLogo(item)} ${styles.logo}`}/>
                            </div>

                            <div className={styles.text_column}>
                                <span className={styles.text}>{getText(item)}</span>
                            </div>

                            <div className={styles.edit_column}>
                                <i
                                className={`${ICONS.edit} ${styles.edit}`}
                                onClick={(event)=>onItemEdit(event, item)}
                                />
                            </div>

                            <div className={styles.delete_column}>
                                <i
                                className={`${ICONS.delete} ${styles.delete}`}
                                onClick={(event)=>onItemDelete(event, item, index)}
                                />
                            </div>

                        </div>
                    );
                } )
            }

        </div>
    );
}

export default React.memo(DisplayList);