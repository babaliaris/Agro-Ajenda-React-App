import React from "react";
import { ToolbarBtnI } from "../toolbar-btn.interface";
import { ICONS } from "../../../core/icons";
import { Logger } from "../../../core/logger";
import ToolbarBtn from "../../ui/toolbar-button/ToolbarBtn";



function ProductionsToolbar()
{
    const [items, setItems] = React.useState<ToolbarBtnI[]>([]);


    const onAddButtonClicked = React.useCallback(()=>
    {
        Logger.info(ICONS.add);

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

        </div>
    );
}

export default React.memo(ProductionsToolbar);