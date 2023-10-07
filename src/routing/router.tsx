import { createHashRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { AppRoutes } from "./AppRoutes";
import { Blog, Contacts, ItemPage, ItemsPage, Orders, SinglePost } from "../pages";
import CardsBlog from "../components/cards-blog/CardsBlog";

export const router = createHashRouter([
  {
    path: AppRoutes.HOME || "julides/",
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
        element: <Contacts />,
      },
      {
        path: AppRoutes.ORDERS,
        element: <Orders />,
      },
      {
        path: AppRoutes.BLOG,
        element: <Blog />,
        children: [
          {
            path: AppRoutes.POST,
            element: <SinglePost />,
          },
          {
            path: AppRoutes.POSTS,
            element: <CardsBlog />,
          },
        ]
      },
     
    ],
  },
]);
