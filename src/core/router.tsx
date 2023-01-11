
import { createBrowserRouter, redirect } from "react-router-dom";

import App from "../App.component";




export const RouterPaths = {
    ROOT: "/",
    APP: "app"
};

export function getRouter(): any
{
    return createBrowserRouter([

        {
            path: RouterPaths.APP,
            element: <App/>
        },

        {
            path: RouterPaths.ROOT,
            loader: ()=>redirect(RouterPaths.APP)
        }
    ]);
}
