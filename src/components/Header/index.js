import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import {IoMenu} from 'react-icons/io5'
import ThemeContext from '../../ThemeContext'
import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, updateTheme} = value

      const iconColor = isDarkTheme ? 'white' : ''

      const logout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const changeTheme = () => {
        updateTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <nav className="header-page-dark">
              <Link to="/" className="link-item">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                  className="header-icon"
                />
              </Link>

              <div className="icon-profile-logout">
                <button
                  type="button"
                  className="theme-btn"
                  onClick={changeTheme}
                  data-testid="theme"
                >
                  <BiSun className="moon-icon-dark" />
                </button>
                <button type="button" className="theme-btn-profile">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile"
                  />
                </button>
                <Link to="/saved-videos" className="theme-btn">
                  <IoMenu className={`saved-icon ${iconColor}`} />
                </Link>
                <div className="popup-div-d">
                  <Popup
                    modal
                    trigger={
                      <button type="button" className="logout-btn-dark">
                        Logout
                      </button>
                    }
                  >
                    {close => (
                      <>
                        <div className="pop-card-d">
                          <p className="pop-pd">
                            Are you sure, you want to logout?
                          </p>
                          <div className="flex">
                            <button
                              type="button"
                              className="cancel-d"
                              onClick={() => close()}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="exit-d"
                              onClick={logout}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </Popup>
                </div>
              </div>
            </nav>
          ) : (
            <nav className="header-page">
              <Link to="/" className="link-item">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  className="header-icon"
                />
              </Link>

              <ul className="icon-profile-logout">
                <button
                  type="button"
                  className="theme-btn"
                  onClick={changeTheme}
                  data-testid="theme"
                >
                  <FaMoon className="moon-icon" />
                </button>
                <button type="button" className="theme-btn-profile">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile"
                  />
                </button>
                <Link to="/saved-videos" className="theme-btn">
                  <IoMenu className={`saved-icon ${iconColor}`} />
                </Link>
                <div className="popup-div">
                  <Popup
                    modal
                    trigger={
                      <button type="button" className="logout-btn">
                        Logout
                      </button>
                    }
                  >
                    {close => (
                      <>
                        <div className="pop-card">
                          <p className="pop-p">
                            Are you sure you want to logout?
                          </p>
                          <div className="flex">
                            <button
                              type="button"
                              className="cancel"
                              onClick={() => close()}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="exit"
                              onClick={logout}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </Popup>
                </div>
              </ul>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
