import React from "react";
import { ToolbarBtnI } from "../toolbar-btn.interface";
import { ICONS } from "../../../core/icons";
import ToolbarBtn from "../../ui/toolbar-button/ToolbarBtn";
import CenteredModal from "../../centered-modal/CenteredModal";



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
            <CenteredModal
            onClose={onCreateModalClose}
            >
                Modal Works!
            </CenteredModal>
        }

        </div>
    );
}

export default React.memo(ProductionsToolbar);