import { Route, Switch, Redirect } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Layout from 'Components/Layout'
import PokeList from 'Components/PokeList'
import PokeDetail from 'Components/PokeDetails'
import * as ROUTES from 'Constants/routes'

function Routes () {
  return (
    <Route
      render={({ location }) => (
        <Layout>
          <TransitionGroup>
            <CSSTransition classNames="fade" key={location.key} timeout={450}>
              <div className="page">
                <Switch location={location}>
                  <Route component={PokeList} exact path={ROUTES.POKELIST} />
                  <Route component={PokeDetail} exact path={ROUTES.POKEDETAIL} />
                  <Redirect to={ROUTES.POKELIST} />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </Layout>
      )}
    />
  )
}

export default Routes
