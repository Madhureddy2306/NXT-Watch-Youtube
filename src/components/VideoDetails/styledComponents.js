import Styled from 'styled-components'

export const VideoDetailsDiv = Styled.div`
    height:100vh;
    width:100vw;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
    font-family:"Roboto";
`
export const BottomDiv = Styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    
    @media (max-width:700px){
        height:83%;
    }
`

export const VideoPlayerDiv = Styled.div`
    width:100%;
    padding:1%;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
`
export const FailDiv = Styled.div`
  height: 100%;
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
export const RetryBtn = Styled.button`
    background-color:#3b82f6;
    height:35px;
    width:70px;
    border-width:0px;
    border-radius:5px;
    color:#f8f8f8;
    cursor:pointer;
    font-weight:500;
`
export const Title = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#0f0f0f')};
    font-size:40px;
    font-weight:500;
    margin-bottom:2%;
    margin-top:0px;

    
    @media (max-width:700px){
        font-size:1rem;
    }
    @media (min-width:700px) and (max-width:980px){
        font-size:1.5rem;
    }
    @media (min-width:981px) and (max-width:1200px){
        font-size:2.2rem;
    }
`
export const Title1 = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#0f0f0f')};
    font-size:14px;
    font-weight:500;
    margin:0px;
    margin-left:2%;
`
export const Flexer = Styled.div`
    background-color:transparent;
    width:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`
export const Flexer1 = Styled.div`
    padding-left:2%;
    width:50%;
    display:flex;
    justify-content:space-between;
`

export const ViewsAndTime = Styled.div`
    height:25px;
    width:50%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`
export const ChannelName = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#94a3b8')};
    font-size:14px;
    margin-top:5px;
    margin-bottom:2px;
    margin-right:2px;
`
export const ChannelName1 = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#94a3b8')};
    font-size:10px;
    margin-top:0px;
    margin-bottom:2px;
    margin-right:2px;
    margin-left:2%;
`

export const ListTime = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#94a3b8')};
    font-size:14px;
    margin-top:5px;
    margin-bottom:2px;
    padding-left:0px;
`
export const LikeDisLikeSaveDiv = Styled(ViewsAndTime)`
    justify-content:space-around;
    padding-left:0px;
    width:50%;
`
export const IconBtn = Styled.button`
    height:25px;
    padding-left:0px;
    border-width:0px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    cursor:pointer;
    background-color:transparent;
`
export const Like = Styled.p`
    font-size:12px;
    color:${props => (props.bgColor ? '#2563eb' : '#64748b"')};
    margin:0px;
    font-weight:600;
    margin-left:0px;
`
export const HrLine = Styled.hr`
    width:100%;
    background-color:#d7dfe9;
    margin-top:1.5%;
`
export const IconAndTitle = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
`
export const ChannelImg = Styled.img`
    width:10%;
    height:30px;
    border-radius:5%;
    margin-right:1%;
    margin-top:2%;
`
export const NameSubscribers = Styled.div`
    background-color:transparent;
    width:90%;
    display:flex;
    justify-content:center;
    flex-direction:column;
`
export const DescP = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#101010')};
    font-size:12px;
    font-weight:500;
    width:85%;
    margin:auto;
    text-align:left;
    margin-top:2%;
`
