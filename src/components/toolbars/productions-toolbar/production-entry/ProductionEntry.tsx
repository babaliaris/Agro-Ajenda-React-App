import React from "react";
import styles from "./ProductionEntry.module.css";
import CenteredModal from "../../../centered-modal/CenteredModal";
import Button from "../../../ui/button/Button";
import { ProductionModel } from "../../../../models/production.model";
import TextInput from "../../../ui/text-input/TextInput";
import { ICONS } from "../../../../core/icons";
import { Logger } from "../../../../core/logger";

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
        style={{width: "90%"}}
        onClose={onClose}
        >
            <div className={styles.create_modal_container}>

                <div className={styles.create_modal_title}>
                    <label>Create Production</label>
                </div>

                <div className={styles.create_modal_body}>
                    <TextInput type="text" placeholder="Input1" style={{marginTop: "1rem"}} icon={ICONS.production} error="asd" required
                    onChange={(event)=>Logger.info(event.target.value)}
                    />
                    <TextInput type="text" placeholder="Input2" style={{marginTop: "1rem"}} icon={ICONS.production}/>
                    <TextInput type="text" placeholder="Input3" style={{marginTop: "1rem"}} icon={ICONS.production}/>
                    <TextInput type="text" placeholder="Input4" style={{marginTop: "1rem"}} icon={ICONS.production}/>
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