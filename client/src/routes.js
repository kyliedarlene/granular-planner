import Home from "./pages/Home";
import ManageRoutines from "./pages/ManageRoutines";
import UpdateRoutine from "./pages/UpdateRoutine";
import NewRoutine from "./pages/NewRoutine";
import Days from "./pages/Days";
import DisplayDay from "./pages/DisplayDay";

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
        path: "/day/:id",
        element: <DisplayDay />,
    }
];

export default routes;