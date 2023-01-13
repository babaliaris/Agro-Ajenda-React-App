import React from "react";
import styles from './Toolbar.module.css';
import { Logger } from "../../core/logger";
import {ICONS} from '../../core/icons';
import ToolbarBtn from "../ui/toolbar-button/ToolbarBtn";

function Toolbar()
{
    return (
        <div className={styles.container}>
            
            <div className={styles.logo_column}>
                <i className={`${ICONS.toolbox} ${styles.logo}`}></i>
            </div>

            <div className={styles.items_column}>
                <ToolbarBtn
                onClick={()=>Logger.info("Testing Toolbar Button onClick")}
                >
                    <i className={ICONS.add}/>
                </ToolbarBtn>
            </div>

        </div>
    );
}

export default React.memo(Toolbar);