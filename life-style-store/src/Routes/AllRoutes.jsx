import {Route,Routes} from "react-router-dom";
import Home from "../Components/Home";
import {Category} from "../Components/Category/Category";

export const AllRoutes = ()=>{
    return(
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/category" element = {<Category />}/>  
        </Routes>
    )
}