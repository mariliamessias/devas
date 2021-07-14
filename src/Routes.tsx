import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BackendTrail } from "./pages/BackendTrail";
import { FrontendTrail } from "./pages/FrontendTrail";
import { FundamentalsTrail } from "./pages/FundamentalsTrail";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/trail-fundamentals" exact>
            <FundamentalsTrail/>
        </Route>
        <Route path="/trail-frontend" exact>
            <FrontendTrail/>
        </Route>
        {/* <Route path="/trail-backend" exact>
            <BackendTrail/>
        </Route> */}
        {/* <Route path="/bootcamps" exact>
            <FrontendTrail/>
        </Route> */}
        <Route>
            <NotFound/>
        </Route>
        </Switch>
    </BrowserRouter>
    )
}