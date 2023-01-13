import React from "react";
import styles from './Toolbar.module.css';
import { Logger } from "../../core/logger";
import {ICONS} from '../../core/icons';
import ToolbarBtn from "../ui/toolbar-button/ToolbarBtn";
import * as Router from 'react-router-dom';
import { RouterPaths } from "../../core/router";


interface ToolbarItem
{
    id: number,
    logo: string,
    onClick: ()=>void
};

function Toolbar()
{
    const [items, setItems] = React.useState<ToolbarItem[]>([]);
    const location = Router.useLocation();

    React.useEffect(()=>
    {

        //Production Tool Buttons.
        if (`${RouterPaths.ROOT}${RouterPaths.APP}${RouterPaths.ROOT}${RouterPaths.PRODUCTIONS}` === location.pathname)
        {
            setItems([
                {id: 0, logo: ICONS.add, onClick: ()=>{Logger.info(ICONS.add)}}
            ]);
        }

    }, [location]);


    return (
        <div className={styles.container}>
            
            <div className={styles.logo_column}>
                <i className={`${ICONS.toolbox} ${styles.logo}`}></i>
            </div>

            <div className={styles.items_column}>

                {
                    items.map((item)=>
                    {
                        return (
                            <ToolbarBtn
                            key={item.id}
                            onClick={item.onClick}
                            >
                                <i className={item.logo}/>
                            </ToolbarBtn>
                        );
                    })
                }
                
            </div>

        </div>
    );
}

export default React.memo(Toolbar);