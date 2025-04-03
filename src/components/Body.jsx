import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";

const Body = () =>{
    const dispatch = useDispatch();
    const appRoutes = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ]) 

    return(
        <div>
           <RouterProvider router = {appRoutes} />
        </div>
    )
}
export default Body;