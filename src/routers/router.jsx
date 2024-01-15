import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllPosts from "../pages/AllPosts";
import AddPosts from "../pages/AddPosts";
import EditPost from "../pages/EditPost";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/all-posts",
                element: <AllPosts></AllPosts>
            },
            {
                path: "/add-posts",
                element: <AddPosts/>
            },
            {
                path: "/edit-post/:id",
                element: <EditPost/>
            }
        ]
    },
    {
        path:"*",
        element: <ErrorPage/>
    }
])

export default router;