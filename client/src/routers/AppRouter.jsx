import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "../components/ui";
import { Activities, CountryId, HomePage, LandingPage } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/'> <LandingPage /> </Route>
          <Route exact path='/home'> <HomePage /> <Footer /> </Route>
          <Route exact path='/home/:id'> <CountryId /> <Footer /> </Route>
          <Route exact path='/activities' > <Activities /> <Footer /> </Route>
        </Switch>
      </div>
    </BrowserRouter >
  )
}
