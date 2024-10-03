import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import MobileNavBar from '../MobileNavbar'
import './index.css'
import {
  GamingDiv,
  BottomDiv,
  FailDiv,
  FailH1,
  FailImg,
  Failpara,
  RetryBtn,
  RightBar,
  RightDiv,
  GamingHeadingDiv,
  GamingH1,
  GamingIconDiv,
  GameDisplayDiv,
  GameCard,
  GameImg,
  Title,
  Title1,
} from './styledComponents'

const categoriesList = [
  {
    displayText: 'Home',
    optionId: 'home',
  },
  {
    displayText: 'Trending',
    optionId: 'trending',
  },
  {
    displayText: 'Gaming',
    optionId: 'gaming',
  },
  {
    displayText: 'Saved Videos',
    optionId: 'saved videos',
  },
]

class Gaming extends Component {
  state = {
    gamingVideos: [],
    isLoading: false,
    requestFailed: false,
    selectedOption: 'gaming',
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  renderFailure = value => {
    const url = value
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailDiv bgColor={value}>
        <FailImg src={url} alt="failure image" />
        <FailH1 isDark={value}>Oops!Something Went Wrong</FailH1>
        <Failpara isDark={value}>
          We are having some trouble to complete your request.Please try again.
        </Failpara>
        <RetryBtn type="button" onClick={this.getGamingVideos}>
          Retry
        </RetryBtn>
      </FailDiv>
    )
  }

  getGamingVideos = async () => {
    this.setState({isLoading: true})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const camelData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))

      this.setState({
        gamingVideos: camelData,
        isLoading: false,
        requestFailed: false,
      })
    } else {
      this.setState({requestFailed: true, isLoading: false})
    }
  }

  renderLoader = value => (
    <FailDiv data-testid="loader" bgColor={value}>
      <Loader type="ThreeDots" color="#3b82f6" height="40" width="40" />
    </FailDiv>
  )

  render() {
    const {isLoading, requestFailed, gamingVideos, selectedOption} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <GamingDiv bgColor={isDarkTheme} data-testid="gaming">
              <Header />
              <BottomDiv>
                <SideBar
                  isDarkTheme={isDarkTheme}
                  selectedOption={selectedOption}
                  categoriesList={categoriesList}
                />
                <RightBar bgColor={isDarkTheme}>
                  {isLoading ? (
                    this.renderLoader(isDarkTheme)
                  ) : (
                    <RightDiv bgColor={isDarkTheme}>
                      {requestFailed ? (
                        this.renderFailure(isDarkTheme)
                      ) : (
                        <>
                          <GamingHeadingDiv bgColor={isDarkTheme}>
                            <GamingIconDiv>
                              <SiYoutubegaming className="trend-icon" />
                            </GamingIconDiv>
                            <GamingH1 isDark={isDarkTheme}>Gaming</GamingH1>
                          </GamingHeadingDiv>
                          <GameDisplayDiv>
                            {gamingVideos.map(each => (
                              <Link
                                to={`/videos/${each.id}`}
                                key={each.id}
                                className="link-style"
                              >
                                <GameCard>
                                  <GameImg
                                    src={each.thumbnailUrl}
                                    alt="video thumbnail"
                                  />
                                  <Title isDark={isDarkTheme}>
                                    {each.title}
                                  </Title>
                                  <Title1>{`${each.viewsCount} Watching Worldwide`}</Title1>
                                </GameCard>
                              </Link>
                            ))}
                          </GameDisplayDiv>
                        </>
                      )}
                    </RightDiv>
                  )}
                </RightBar>
              </BottomDiv>
              <MobileNavBar
                isDarkTheme={isDarkTheme}
                selectedOption={selectedOption}
                categoriesList={categoriesList}
                getUrlText={this.getUrlText}
              />
            </GamingDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
