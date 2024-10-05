import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import MobileNavBar from '../MobileNavbar'
import './index.css'
import {
  TrendingDiv,
  BottomDiv,
  FailDiv,
  FailH1,
  FailImg,
  Failpara,
  RetryBtn,
  RightBar,
  TrendHeadingDiv,
  TrendIconDiv,
  TrendH1,
  VideosDiv,
  VideoPlayerDiv,
  VideoDiv,
  VideoImg,
  InfoDiv,
  ChannelName,
  ListTime,
  Title,
  Title1,
  ViewsAndTime,
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
    displayText: 'Saved',
    optionId: 'saved Videos',
  },
]

class Trending extends Component {
  state = {
    trendingVideos: [],
    isLoading: false,
    requestFailed: false,
    selectedOption: 'trending',
  }

  componentDidMount() {
    this.getTrendingVideos()
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
        <RetryBtn type="button" onClick={this.getVideoInfo}>
          Retry
        </RetryBtn>
      </FailDiv>
    )
  }

  getTrendingVideos = async () => {
    this.setState({isLoading: true})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'

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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))

      this.setState({
        trendingVideos: camelData,
        requestFailed: false,
        isLoading: false,
      })
    } else {
      this.setState({requestFailed: true})
    }
  }

  renderLoader = value => (
    <FailDiv data-testid="loader" bgColor={value}>
      <Loader type="ThreeDots" color="#3b82f6" height="40" width="40" />
    </FailDiv>
  )

  render() {
    const {
      isLoading,
      requestFailed,
      trendingVideos,
      selectedOption,
    } = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <TrendingDiv bgColor={isDarkTheme} data-testid="trending">
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
                    <VideoPlayerDiv bgColor={isDarkTheme}>
                      {requestFailed ? (
                        this.renderFailure(isDarkTheme)
                      ) : (
                        <>
                          <TrendHeadingDiv bgColor={isDarkTheme}>
                            <TrendIconDiv bgColor={isDarkTheme}>
                              <HiFire className="trend-icon" />
                            </TrendIconDiv>
                            <TrendH1 isDark={isDarkTheme}>Trending</TrendH1>
                          </TrendHeadingDiv>
                          <VideosDiv>
                            {trendingVideos.map(each => {
                              const date = new Date(each.publishedAt)
                              const dateDiff = formatDistanceToNow(
                                new Date(
                                  `${date.getFullYear()},${
                                    date.getMonth() + 1
                                  },${date.getDate()}`,
                                ),
                              )

                              return (
                                <Link
                                  to={`/videos/${each.id}`}
                                  className="link-style"
                                  key={each.id}
                                >
                                  <VideoDiv>
                                    <VideoImg
                                      src={each.thumbnailUrl}
                                      alt="video thumbnail"
                                    />
                                    <InfoDiv>
                                      <Title isDark={isDarkTheme}>
                                        {each.title.slice(0, 30)}...
                                      </Title>
                                      <Title1 isDark={isDarkTheme}>
                                        {each.channel.name}
                                      </Title1>
                                      <ViewsAndTime>
                                        <ChannelName
                                          isDark={isDarkTheme}
                                        >{`${each.viewsCount} views`}</ChannelName>
                                        <ListTime
                                          isDark={isDarkTheme}
                                        >{`${dateDiff.slice(
                                          -7,
                                        )} ago`}</ListTime>
                                      </ViewsAndTime>
                                    </InfoDiv>
                                  </VideoDiv>
                                </Link>
                              )
                            })}
                          </VideosDiv>
                        </>
                      )}
                    </VideoPlayerDiv>
                  )}
                </RightBar>
              </BottomDiv>
              <MobileNavBar
                isDarkTheme={isDarkTheme}
                selectedOption={selectedOption}
                categoriesList={categoriesList}
                getUrlText={this.getUrlText}
              />
            </TrendingDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
