import React from "react";
import styles from "./ProductionEntry.module.css";
import CenteredModal from "../../../centered-modal/CenteredModal";
import Button from "../../../ui/button/Button";
import { ProductionModel } from "../../../../models/production.model";

type ProductionEntryProps = {
    onClose: ()=>void,
    onCreate: (data: ProductionModel)=>void
}

function ProductionEntry({onClose, onCreate}:ProductionEntryProps)
{

    const onCreateButtonClicked = React.useCallback(()=>
    {
        onCreate({id: 0, name: "Production 0", year: 2022});
        
    },[]);

    return (
        <CenteredModal
        onClose={onClose}
        >
            <div className={styles.create_modal_container}>

                <div className={styles.create_modal_title}>
                    <label>Create Production</label>
                </div>

                <div className={styles.create_modal_body}>
                    <input type="text" placeholder="Input"/>
                    <input type="text" placeholder="Input"/>
                    <input type="text" placeholder="Input"/>
                    <input type="text" placeholder="Input"/>
                </div>

                <Button
                style={{marginTop: "1rem"}}
                onClick={onCreateButtonClicked}
                >
                    Create
                </Button>

            </div>

        </CenteredModal>
    );
}

export default React.memo(ProductionEntry);