import React from "react";

type CenteredModalProps = {
    children: React.ReactNode
};

function CenteredModal({}: CenteredModalProps)
{
    return (
        <div>
            CenteredModal Works!
        </div>
    );
}

export default React.memo(CenteredModal);