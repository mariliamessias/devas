import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FundamentalsTrail } from "./pages/FundamentalsTrail";
import { Home } from "./pages/Home";

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
        </Switch>
    </BrowserRouter>
    )
}