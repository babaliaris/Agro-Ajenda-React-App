import React from "react";
import styles from './ProductionsToolbar.module.css';
import { ToolbarBtnI } from "../toolbar-btn.interface";
import { ICONS } from "../../../core/icons";
import ToolbarBtn from "../../ui/toolbar-button/ToolbarBtn";
import ProductionEntry from "./production-entry/ProductionEntry";
import { Logger } from "../../../core/logger";
import { ProductionModel } from "../../../models/production.model";




function ProductionsToolbar()
{
    const [items, setItems] = React.useState<ToolbarBtnI[]>([]);
    const [show_create_modal, setShowCreateModal] = React.useState(false);


    const onAddButtonClicked = React.useCallback(()=>
    {
        setShowCreateModal(true);
    }, []);


    const onCreateModalClose = React.useCallback(()=>
    {
        setShowCreateModal(false);
    }, []);

    const onProductionCreated = React.useCallback((data: ProductionModel)=>
    {
        Logger.info(data);
    }, []);


    React.useEffect(()=>
    {
        setItems([
            {id: 0, logo: ICONS.add, onClick: onAddButtonClicked}
        ]);

    }, [onAddButtonClicked]);

    return (
        <div>
            
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

        { show_create_modal &&
            <ProductionEntry
                onClose={onCreateModalClose}
                onCreate={onProductionCreated}
            />
        }

        </div>
    );
}

export default React.memo(ProductionsToolbar);