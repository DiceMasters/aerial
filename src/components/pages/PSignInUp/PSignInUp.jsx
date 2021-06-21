import './style.scss'
import logo from './../../../assets/LogoWhite.svg'

import SignForm from '../../containers/SignForm'
import { Link } from 'react-router-dom'

export default function PSignInUp (props) {
  return (
    <div className="p-sign-in-up">
      <header className="p-sign-in-up__head">
          <div className="p-sign-in-up__head-logo">
            <img src={logo} alt="Aerial Logo" />
          </div>
        </header>

        <div className="p-sign-in-up__body">
          <SignForm type={props.path}/>
        </div>

        <div className="p-sign-in-up__footer">
        {
          props.path === '/login'
            ?
              <>
                <p>Вы еще не зарегестрированы?</p>
                <Link to="/registration">Зарегистрироваться</Link>
              </>
            :
              <>
                <p>Уже есть аккаунт?</p>
                <Link to="/login">Войти</Link>
              </>
        }
        </div>
    </div>
  )
}
