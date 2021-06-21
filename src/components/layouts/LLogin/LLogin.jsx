import { Route, Switch } from 'react-router-dom'
import PSignInUp from '../../pages/PSignInUp'

import './style.scss'

function LLogin (props) {
  const { match } = props

  return (
    <div className="l-login">
      <div className="l-login__wrap">
        <Switch>
          <Route exact
                 path={`${ match.path }`}
                 render={() => <PSignInUp path={match.path} />}/>
        </Switch>
      </div>
    </div>
  )
}

export default LLogin
