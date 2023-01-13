import React from "react";
import styles from "./Productions.module.css";
import { Logger } from "../../core/logger";
import { ProductionModel } from "../../models/production.model";
import { getProductions } from "../../services/api/getProductions";
import DisplayList from "../display-list/DisplayList";
import { ICONS } from "../../core/icons";

function Productions()
{
    const [productions, setProductions] = React.useState<ProductionModel[]>([]);

    const onProductionClicked = React.useCallback((item: ProductionModel)=>
    {
        Logger.info(`onProductionClicked: ${JSON.stringify(item)}`);
    }, []);

    const onProductionEdit = React.useCallback((item: ProductionModel)=>
    {
        Logger.info(`onProductionEdit: ${JSON.stringify(item)}`);
    }, []);

    const onProductionDelete = React.useCallback((item: ProductionModel, index: number)=>
    {
        Logger.info(`onProductionDelete: ${index}`);

        setProductions((oldProductions)=>
        {
            let new_productions = [...oldProductions];

            new_productions.splice(index, 1);

            return new_productions;
        });

    }, []);

    React.useEffect(()=>
    {
        getProductions().then((value)=>
        {
            setProductions(value);

        }).catch((err)=>
        {
            Logger.error("Failed to getProductions()");
        });

    }, []);

    return (
        <div className={styles.container}>
            
            <DisplayList
            data={productions}
            getKey={(item: ProductionModel)=>item.id}
            getLogo={()=>ICONS.production}
            getText={(item:ProductionModel)=>item.name}
            onClick={onProductionClicked}
            onEdit={onProductionEdit}
            onDelete={onProductionDelete}
            />
        </div>
    );
}

export default React.memo(Productions);