import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../ThemeContext'
import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  setUsername = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  displayPassword = event => {
    const ele = document.getElementById('pass')

    if (event.target.checked) {
      ele.type = 'text'
    } else {
      ele.type = 'password'
    }
  }

  processLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userInfo = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userInfo),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {
        expires: 20,
      })
      history.replace('/')
      this.setState({showError: false})
    } else {
      this.setState({showError: true, errorMsg: `*${data.error_msg}`})
    }
  }

  render() {
    const {username, password, errorMsg, showError} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              {isDarkTheme ? (
                <div className="login-page-dark">
                  <form className="login-card-dark">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                      className="website-logo"
                    />
                    <label htmlFor="user" className="label-dark">
                      USERNAME
                    </label>
                    <input
                      type="text"
                      className="user-input-dark"
                      onChange={this.setUsername}
                      value={username}
                      placeholder="Username"
                      id="user"
                    />
                    <label htmlFor="pass" className="label-dark">
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      className="user-input-dark"
                      onChange={this.setPassword}
                      value={password}
                      placeholder="Password"
                      id="pass"
                    />
                    <div className="label-div">
                      <input
                        type="checkbox"
                        className="box"
                        onClick={this.displayPassword}
                        id="check"
                      />
                      <label htmlFor="check" className="show-pass-dark">
                        Show Password
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="login-btn"
                      onClick={this.processLogin}
                    >
                      Login
                    </button>
                    <p className="error">{showError && errorMsg}</p>
                  </form>
                </div>
              ) : (
                <div className="login-page">
                  <form className="login-card">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                      className="website-logo"
                    />
                    <label htmlFor="user" className="label">
                      USERNAME
                    </label>
                    <input
                      type="text"
                      className="user-input"
                      onChange={this.setUsername}
                      value={username}
                      placeholder="Username"
                      id="user"
                    />
                    <label htmlFor="pass" className="label">
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      className="user-input"
                      onChange={this.setPassword}
                      value={password}
                      placeholder="Password"
                      id="pass"
                    />
                    <div className="label-div">
                      <input
                        type="checkbox"
                        className="box"
                        onClick={this.displayPassword}
                        id="check"
                      />
                      <label htmlFor="check" className="show-pass">
                        Show Password
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="login-btn"
                      onClick={this.processLogin}
                    >
                      Login
                    </button>
                    <p className="error">{showError && errorMsg}</p>
                  </form>
                </div>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginPage
