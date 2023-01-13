import React from "react";
import styles from './Toolbar.module.css';
import {ICONS} from '../../core/icons';
import * as Router from 'react-router-dom';
import { RouterPaths } from "../../core/router";
import ProductionsToolbar from "./productions-toolbar/ProductionsToolbar";


enum WhichToolbarE
{
    NONE, PRODUCTIONS
}

function Toolbar()
{
    const [which_toolbar_to_show, setWhichToolbarToShow] = React.useState<WhichToolbarE>(WhichToolbarE.NONE);
    const location = Router.useLocation();

    React.useEffect(()=>
    {

        //Productions Toolbar.
        if (`${RouterPaths.ROOT}${RouterPaths.APP}${RouterPaths.ROOT}${RouterPaths.PRODUCTIONS}` === location.pathname)
        {
            setWhichToolbarToShow(WhichToolbarE.PRODUCTIONS);
        }

    }, [location]);


    return (
        <div className={styles.container}>
            
            <div className={styles.logo_column}>
                <i className={`${ICONS.toolbox} ${styles.logo}`}></i>
            </div>

            <div className={styles.items_column}>

                {(which_toolbar_to_show === WhichToolbarE.PRODUCTIONS) ? <ProductionsToolbar/> : null}

            </div>

        </div>
    );
}

export default React.memo(Toolbar);