import {Component} from 'react'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'
import {
  VideoDetailsDiv,
  BottomDiv,
  VideoPlayerDiv,
  FailDiv,
  FailH1,
  FailImg,
  Failpara,
} from './styledComponents'

class NotFound extends Component {
  renderFailure = value => {
    const url = value
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

    return (
      <FailDiv bgColor={value}>
        <FailImg src={url} alt="not found" />
        <FailH1 isDark={value}>Page Not Found</FailH1>
        <Failpara isDark={value}>
          we are sorry, the page you requested could not be found.
        </Failpara>
      </FailDiv>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <VideoDetailsDiv bgColor={isDarkTheme} data-testid="not-found">
              <Header />
              <BottomDiv>
                <SideBar isDarkTheme={isDarkTheme} />
                <VideoPlayerDiv bgColor={isDarkTheme}>
                  {this.renderFailure(isDarkTheme)}
                </VideoPlayerDiv>
              </BottomDiv>
            </VideoDetailsDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
