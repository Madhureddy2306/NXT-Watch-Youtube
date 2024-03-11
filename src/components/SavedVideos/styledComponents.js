import Styled from 'styled-components'

export const GamingDiv = Styled.div`
    height:100vh;
    background-color:${props => (props.bgColor ? '#0f0f0f ' : '#f9f9f9')};
    font-family:"Roboto";
`
export const BottomDiv = Styled.div`
    height:90vh;
    width:100%;
    display:flex;
    justify-content:flex-start;
    background-color:transparent;
`
export const RightBar = Styled.div`
    width:100%;
    height:100%;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
`
export const RightDiv = Styled.div`
    width:100%;
    height:100%;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
`

export const GamingHeadingDiv = Styled.div`
    width:100%;
    background-color:${props => (props.bgColor ? '#010101' : '#d7dfe9')};
    height:15%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const GamingIconDiv = Styled.div`
    background-color:${props => (props.bgColor ? '#d7dfe9' : 'lightcyan')};
    height:70%;
    width:8%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    border-radius:50%;
    margin-right:3%;
`

export const GamingH1 = Styled.h1`
    color:${props => (props.isDark ? '#f8f8f8' : '#0f0f0f')};
    font-size:26px;
`
export const FailDiv = Styled.div`
  height: 90vh;
  width:100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family:"Roboto";
  background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
`
export const FailImg = Styled.img`
    width:40%;
    height:50%;
    margin-top:3%;
`
export const FailH1 = Styled.h1`
    color:${props => (props.isDark ? '#f8f8f8' : '#0f0f0f')};
    font-size:28px;
    margin-top:5px;
    margin-bottom:5px;
`

export const Failpara = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#0f0f0f')};
    font-size:16px;
`

export const Title = Styled.p`
    color:${props => (props.isDark ? '#f9f9f9' : '#010101')};
    font-size:14px;
    font-weight:500;
    margin-bottom:2px;
    margin-top:2px;
`
export const Title1 = Styled.p`
    color: #475569;
    font-size:14px;
    font-weight:500;
    margin:0px;
`
export const VideosDiv = Styled.div`
    width:100%;
    height:85%;
    padding:2%;
    background-color:transparent;
    overflow-y:auto;
`
export const VideoDiv = Styled.div`
    width:100%;
    height:40%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-bottom:1%;
`
export const VideoImg = Styled.img`
    width:40%;
    height:90%;
`
export const InfoDiv = Styled.div`
    width:50%;
    height:90%;
    background-color:transparent;
    padding-left:1%;
    
`
export const ViewsAndTime = Styled.div`
    height:25px;
    width:50%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const ChannelName = Styled.p`
    color:${props => (props.isDark ? '#94a3b8' : '#94a3b8')};
    font-size:14px;
    font-weight:500;
    margin-top:5px;
    margin-bottom:2px;
`
export const ListTime = Styled.li`
    color:${props => (props.isDark ? '#f8f8f8' : '#94a3b8')};
    font-size:14px;
    font-weight:500;
    margin-top:5px;
    margin-bottom:2px;
    padding-left:0px;
`
