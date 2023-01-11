
import { createBrowserRouter } from "react-router-dom";

import App from "../App.component";




export const RouterPaths = {
    APP: "app"
};

export function getRouter(): any
{
    return createBrowserRouter([
        {
            path: RouterPaths.APP,
            element: <App/>
        }
    ]);
}
