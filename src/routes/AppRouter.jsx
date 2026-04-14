import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendDetails from "../pages/FriendDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/timeline',
                Component: Timeline
            },
            {
                path: '/stats',
                Component: Stats
            },
            {
                path: 'friends/:id',
                Component: FriendDetails
            }
        ],
        errorElement: <NotFound/>,
    }
]);