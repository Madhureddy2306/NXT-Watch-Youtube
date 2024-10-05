import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
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
  RightBar,
  RightDiv,
  GamingHeadingDiv,
  GamingH1,
  GamingIconDiv,
  VideosDiv,
  VideoDiv,
  VideoImg,
  InfoDiv,
  ViewsAndTime,
  ChannelName,
  ListTime,
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
    displayText: 'Saved',
    optionId: 'saved Videos',
  },
]

class SavedVideos extends Component {
  state = {
    isLoading: false,
    selectedOption: 'saved Videos',
  }

  renderFailure = value => {
    const url = value
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

    return (
      <FailDiv bgColor={value}>
        <FailImg src={url} alt="saved videos" />
        <FailH1 isDark={value}>No saved videos found</FailH1>
        <Failpara isDark={value}>
          You can save your videos while watching them
        </Failpara>
      </FailDiv>
    )
  }

  renderLoader = value => (
    <FailDiv data-testid="loader" bgColor={value}>
      <Loader type="ThreeDots" color="#3b82f6" height="40" width="40" />
    </FailDiv>
  )

  render() {
    const {isLoading, selectedOption} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedList} = value

          return (
            <GamingDiv bgColor={isDarkTheme} data-testid="savedVideos">
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
                      {savedList.length === 0 ? (
                        this.renderFailure(isDarkTheme)
                      ) : (
                        <>
                          <GamingHeadingDiv bgColor={isDarkTheme}>
                            <GamingIconDiv>
                              <SiYoutubegaming className="trend-icon" />
                            </GamingIconDiv>
                            <GamingH1 isDark={isDarkTheme}>
                              Saved Videos
                            </GamingH1>
                          </GamingHeadingDiv>
                          <VideosDiv>
                            {savedList.map(each => {
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
                                      alt="thumbnail"
                                    />
                                    <InfoDiv>
                                      <Title isDark={isDarkTheme}>
                                        {each.title}
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

export default SavedVideos
