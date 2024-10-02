import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../ThemeContext/index'
import {
  VideoBodyDiv,
  VideoImg,
  SecondDiv,
  IconAndTitle,
  Title,
  ChannelImg,
  ChannelName,
  ViewsAndTime,
  ListTime,
} from './styledComponents'
import './index.css'

const VideoItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoInfo} = props
      const {
        id,
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewsCount,
      } = videoInfo

      const date = new Date(publishedAt)
      const dateDiff = formatDistanceToNow(
        new Date(
          `${date.getFullYear()},${date.getMonth() + 1},${date.getDate()}`,
        ),
      )

      return (
        <Link to={`/videos/${id}`} className="link-me">
          <VideoBodyDiv bgColor={isDarkTheme}>
            <VideoImg src={thumbnailUrl} alt="video thumbnail" />
            <IconAndTitle bgColor={isDarkTheme}>
              <ChannelImg src={channel.profileImageUrl} alt=" channel logo" />
              <SecondDiv>
                <Title isDark={isDarkTheme}>{title.slice(0, 45)}...</Title>
                <ChannelName isDark={isDarkTheme}>{channel.name}</ChannelName>
                <ViewsAndTime>
                  <ChannelName isDark={isDarkTheme}>
                    {viewsCount} views
                  </ChannelName>
                  <ListTime isDark={isDarkTheme}>{`${dateDiff.slice(
                    -7,
                  )} ago`}</ListTime>
                </ViewsAndTime>
              </SecondDiv>
            </IconAndTitle>
          </VideoBodyDiv>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default VideoItem
