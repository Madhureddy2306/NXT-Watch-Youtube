import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'
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
  RetryBtn,
  Title,
  Flexer,
  ViewsAndTime,
  ChannelName,
  ListTime,
  LikeDisLikeSaveDiv,
  Like,
  IconBtn,
  HrLine,
  IconAndTitle,
  ChannelImg,
  NameSubscribers,
  Flexer1,
  Title1,
  ChannelName1,
  DescP,
} from './styledComponents'

class VideoDetails extends Component {
  state = {
    videoInfo: '',
    isLoading: true,
    requestFailed: false,
    activeOption: '',
    saved: false,
  }

  componentDidMount() {
    this.getVideoInfo()
  }

  renderFailure = value => {
    const url = value
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailDiv bgColor={value}>
        <FailImg src={url} alt="failure view" />
        <FailH1 isDark={value}>Oops! Something Went Wrong</FailH1>
        <Failpara isDark={value}>
          We are having some trouble to complete your request. Please try again.
        </Failpara>
        <RetryBtn type="button" onClick={this.getVideoInfo}>
          Retry
        </RetryBtn>
      </FailDiv>
    )
  }

  getVideoInfo = async () => {
    const {match} = this.props
    const {params} = match
    const {videoId} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${videoId}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const camelData = {
        id: data.video_details.id,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewsCount: data.video_details.view_count,
      }

      this.setState({
        videoInfo: camelData,
        requestFailed: false,
        isLoading: false,
      })
    } else {
      this.setState({requestFailed: true})
    }
  }

  renderLoader = value => (
    <FailDiv data-testid="loader" bgColor={value}>
      <Loader
        type="ThreeDots"
        color={value ? '#3b82f6' : '#3b82f6'}
        height="40"
        width="40"
      />
    </FailDiv>
  )

  updateOption = event => {
    this.setState({activeOption: event.target.id})
  }

  setText = () => {
    const {saved} = this.state
    const ele = document.getElementById('save')
    if (saved) {
      ele.textContent = 'Saved'
    } else {
      ele.textContent = 'Save'
    }
  }

  updateSaved = () => {
    this.setState(pre => ({saved: !pre.saved}), this.setText)
  }

  renderVideoBody = (theme, activeId, saveFunction, removeFunction, idList) => {
    const {videoInfo, saved} = this.state

    const {
      id,
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewsCount,
    } = videoInfo

    const date = new Date(publishedAt)
    const dateDiff = formatDistanceToNow(
      new Date(
        `${date.getFullYear()},${date.getMonth() + 1},${date.getDate()}`,
      ),
    )

    const sendTrigger = () => {
      this.updateSaved()
      if (!saved) {
        saveFunction()
      } else {
        removeFunction()
      }
    }

    const savedClass = !idList.includes(id) ? 'save' : ''
    console.log(idList.includes(id))

    const likesVal = activeId === 'like'
    const disLikesVal = activeId === 'dislike'
    const saveVal = saved ? 'active-color' : 'no-color'

    return (
      <>
        <ReactPlayer url={videoUrl} controls width="100%" />
        <Title isDark={theme}>{title}</Title>
        <Flexer>
          <ViewsAndTime>
            <ChannelName isDark={theme}>{`${viewsCount} views`}</ChannelName>
            <ListTime isDark={theme}>{`${dateDiff.slice(-7)} ago`}</ListTime>
          </ViewsAndTime>
          <LikeDisLikeSaveDiv>
            <IconBtn type="button" onClick={this.updateOption}>
              <AiOutlineLike className={`${likesVal}`} id="like" />
              <Like id="like" bgColor={likesVal}>
                Like
              </Like>
            </IconBtn>
            <IconBtn type="button" onClick={this.updateOption}>
              <AiOutlineDislike className={`${disLikesVal}`} id="dislike" />
              <Like id="dislike" bgColor={disLikesVal}>
                Dislike
              </Like>
            </IconBtn>
            <IconBtn type="button" onClick={sendTrigger}>
              <RiMenuAddFill className={`${saveVal} ${savedClass}`} />
              <Like className={`${saveVal} ${savedClass}`} id="save">
                {idList.includes(id) ? 'Saved' : 'Save'}
              </Like>
            </IconBtn>
          </LikeDisLikeSaveDiv>
        </Flexer>
        <HrLine />
        <Flexer1>
          <IconAndTitle bgColor={theme}>
            <ChannelImg src={channel.profileImageUrl} alt="channel logo" />
          </IconAndTitle>
          <NameSubscribers>
            <Title1 isDark={theme}>{channel.name}</Title1>
            <ChannelName1 isDark={theme}>
              {`${channel.subscriberCount} subscribers`}
            </ChannelName1>
          </NameSubscribers>
        </Flexer1>
        <DescP isDark={theme}>{description}</DescP>
      </>
    )
  }

  render() {
    const {requestFailed, isLoading, activeOption, videoInfo} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            addToList,
            savedList,
            removeFromList,
            savedId,
          } = value

          const saveVideo = () => {
            addToList(videoInfo)
          }

          const removeVideo = () => {
            removeFromList(videoInfo.id)
          }

          return (
            <VideoDetailsDiv
              bgColor={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <BottomDiv>
                <SideBar isDarkTheme={isDarkTheme} />
                <VideoPlayerDiv bgColor={isDarkTheme}>
                  {isLoading ? (
                    this.renderLoader(isDarkTheme)
                  ) : (
                    <>
                      {requestFailed
                        ? this.renderFailure(isDarkTheme)
                        : this.renderVideoBody(
                            isDarkTheme,
                            activeOption,
                            saveVideo,
                            removeVideo,
                            savedList,
                            savedId,
                          )}
                    </>
                  )}
                </VideoPlayerDiv>
              </BottomDiv>
            </VideoDetailsDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
