import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import VideoItem from '../VideoItem'
import SideBar from '../SideBar'
import MobileNavBar from '../MobileNavbar'
import ThemeContext from '../../ThemeContext/index'
import {
  HomeDiv,
  BottomDiv,
  RightBar,
  BannerImgDiv,
  BannerLogo,
  GetPara,
  GetBtn,
  BuyDiv,
  SearchDiv,
  InputAndIcon,
  SearchInput,
  IconBtn,
  VideosDiv,
  FailDiv,
  FailImg,
  FailH1,
  Failpara,
  RetryBtn,
} from './styledComponents'
import './index.css'

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

class Home extends Component {
  state = {
    allVideos: '',
    searchInput: '',
    selectedOption: categoriesList[0].optionId,
    isLoading: true,
    showEmpty: false,
    requestFailed: false,
  }

  componentDidMount() {
    this.getAllVideos()
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
        <RetryBtn type="button" onClick={this.getAllVideos}>
          Retry
        </RetryBtn>
      </FailDiv>
    )
  }

  renderNoVideosFound = value => {
    const imageUrl = value
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

    return (
      <FailDiv bgColor={value}>
        <FailImg src={imageUrl} alt="no videos" />
        <FailH1 isDark={value}>No Search results found</FailH1>
        <Failpara isDark={value}>
          Try different key words or remove search filter
        </Failpara>
        <RetryBtn type="button" onClick={this.getAllVideos}>
          Retry
        </RetryBtn>
      </FailDiv>
    )
  }

  getAllVideos = async () => {
    this.setState({isLoading: true})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      if (data.videos.length > 0) {
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
          allVideos: camelData,
          showEmpty: false,
          isLoading: false,
        })
      } else {
        this.setState({showEmpty: true, isLoading: false})
      }
    }
  }

  getUrlText = event => {
    this.setState({selectedOption: event.target.id})
  }

  closeBanner = () => {
    const ele = document.getElementById('banner')
    ele.style.display = 'none'
  }

  updateSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  searchVideos = () => {
    this.getAllVideos()
  }

  renderLoader = value => (
    <FailDiv data-testid="loader" bgColor={value}>
      <Loader type="ThreeDots" color="#3b82f6" height="40" width="40" />
    </FailDiv>
  )

  renderVideos = theme => {
    const {allVideos, showEmpty} = this.state

    return showEmpty
      ? this.renderNoVideosFound(theme)
      : allVideos.map(each => (
          <VideoItem darkTheme={theme} videoInfo={each} key={each.id} />
        ))
  }

  render() {
    const {searchInput, selectedOption, isLoading, requestFailed} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeDiv bgColor={isDarkTheme} data-testid="home">
              <Header />
              <BottomDiv>
                <SideBar
                  isDarkTheme={isDarkTheme}
                  selectedOption={selectedOption}
                  categoriesList={categoriesList}
                  getUrlText={this.getUrlText}
                />
                <RightBar bgColor={isDarkTheme}>
                  <BannerImgDiv id="banner" data-testid="banner">
                    <BuyDiv>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <GetPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </GetPara>
                      <GetBtn>GET IT NOW</GetBtn>
                    </BuyDiv>
                    <AiOutlineClose
                      className="close-icon"
                      onClick={this.closeBanner}
                      data-testid="close"
                    />
                  </BannerImgDiv>
                  <SearchDiv bgColor={isDarkTheme}>
                    <InputAndIcon>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        bgColor={isDarkTheme}
                        onChange={this.updateSearch}
                        value={searchInput}
                      />
                      <IconBtn
                        bgColor={isDarkTheme}
                        data-testid="searchButton"
                        onClick={this.searchVideos}
                      >
                        <AiOutlineSearch className="search-icon" />
                      </IconBtn>
                    </InputAndIcon>
                  </SearchDiv>
                  {isLoading ? (
                    this.renderLoader(isDarkTheme)
                  ) : (
                    <VideosDiv bgColor={isDarkTheme}>
                      {requestFailed
                        ? this.renderFailure(isDarkTheme)
                        : this.renderVideos(isDarkTheme)}
                    </VideosDiv>
                  )}
                </RightBar>
              </BottomDiv>
              <MobileNavBar
                isDarkTheme={isDarkTheme}
                selectedOption={selectedOption}
                categoriesList={categoriesList}
                getUrlText={this.getUrlText}
              />
            </HomeDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
