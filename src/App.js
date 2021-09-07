import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Home from "./containers/Home";
import NotFound from "./containers/404";


const App = ()=>{
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route component= {NotFound} />
            </Switch>
        </>
    )
}

export default App;