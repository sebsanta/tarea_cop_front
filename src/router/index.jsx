import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";
import Home from "../components/Home"
import Formulario from "../components/Formulario";
import FormComponent from "../components/FormComponent";
import Reducer from "../components/Reducer";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/redux",
                element: <Reducer />,
            },
            {
                path: "/axios",
                element: <FormComponent />,
            },
            {
                path: "/formulario",
                element: <Formulario />,
            },
        ]
    },

])