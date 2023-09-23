import {createHashRouter} from "react-router-dom";
import {MainLayout} from "../layouts";
import {AppRoutes} from "./AppRoutes";
import {Contacts, ItemPage, ItemsPage, Orders} from "../pages";


export const router = createHashRouter([
    {
        path: AppRoutes.HOME,
        element: <MainLayout />,
        children: [
            {
                path: AppRoutes.ITEMS,
                element: <ItemsPage />,
            },
            {
                path: AppRoutes.ITEM,
                element: <ItemPage />,
            },
            {
                path: AppRoutes.CONTACTS,
                element: <Contacts/>,
            },
            {
                path: AppRoutes.ORDERS,
                element: <Orders />,
            },

        ],
    },
]);