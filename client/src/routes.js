import Home from "./pages/Home";
import ManageRoutines from "./pages/ManageRoutines";
import UpdateRoutine from "./pages/UpdateRoutine";
import NewRoutine from "./pages/NewRoutine";
import MyDay from "./pages/MyDay";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/manage-routines",
        element: <ManageRoutines />,
    },
    {
        path: "/update-routine/:id",
        element: <UpdateRoutine />,
    },
    {
        path: "/new-routine",
        element: <NewRoutine />,
    },
    {
        path: "/days",
        element: <Days />,
    },
    {
        path: "/edit-day/:id",
        element: <EditDay />,
    },
    {
        path: "/day/:id",
        element: <DisplayDay />,
    }
];

export default routes;