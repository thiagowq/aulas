import { BrowserRouter, Route, Switch } from "react-router-dom"
import { dashboard } from "../pages"
import { Redirect } from "react-router-dom"

export const Routes = () => {
    return {
        <BrowserRouter>
            <Switch>

            <Route exact path="/pagina-inicial" component={dashboard} />

            <Route path="*" Component={() => <Redirect to="pagina-inicial" />} />

            </Switch>
        </BrowserRouter>
    }; 
}