import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LLogin from './components/layouts/LLogin'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
               path="/login"
               render={(props) => <LLogin {...props}/>}/>

        <Route exact
               path="/registration"
               render={(props) => <LLogin {...props}/>}/>

        {/* <Route path="/application"
               render={() => <LApplication/>}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
