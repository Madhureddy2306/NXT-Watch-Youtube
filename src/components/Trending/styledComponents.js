import Styled from 'styled-components'

export const TrendingDiv = Styled.div`
    height:100vh;
    width:100vw;
    background-color:${props => (props.bgColor ? '#0f0f0f ' : '#f9f9f9')};
    font-family:"Roboto";
`
export const BottomDiv = Styled.div`
    height:83%;
    width:100%;
    display:flex;
    justify-content:flex-start;

    @media (min-width:700px){
        height:100%;
    }
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
export const VideoPlayerDiv = Styled.div`
    width:100%;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
`
export const RightBar = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    width:80%;
    height:100%;
    overflow-y:auto;

    @media (max-width:700px){
        width:100%;
    }
`
export const TrendHeadingDiv = Styled.div`
    width:100%;
    background-color:${props => (props.bgColor ? '#010101' : '#d7dfe9')};
    height:15%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:sticky;
    top:0px;
`
export const TrendIconDiv = Styled.div`
    background-color:${props => (props.bgColor ? '#d7dfe9' : 'lightcyan')};
    height:45px;
    width:45px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    border-radius:50%;
    margin-right:3%;
    position:sticky;
    top:0px;

    @media (min-width:700px){
        height:55px;
        width:55px;
    }
`

export const TrendH1 = Styled.h1`
    color:${props => (props.isDark ? '#f8f8f8' : '#0f0f0f')};
    font-size:26px;

    @media (min-width:700px){
        font-size:30px;
    }
`
export const VideosDiv = Styled.ul`
    list-style-type:none;
    padding-left:0px;
    width:100%;
    height:85%;
    padding:2%;
    background-color:transparent;
    overflow-y:auto;
    margin:0px;
`
export const VideoDiv = Styled.div`
    width:100%;
    height:58%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-bottom:2%;
`
export const VideoImg = Styled.img`
    width:40%;
    height:100%;
`
export const InfoDiv = Styled.div`
    width:50%;
    height:100%;
    background-color:transparent;
    padding-left:1%;
    
`
export const ViewsAndTime = Styled.div`
    height:25px;
    width:90%;
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

    @media (max-width:700px){
        font-size:12px;
        margin-top:0px;
    }

    @media (min-width:700px){
        font-size:16px;
        margin-top:0px;
    }
`
export const ListTime = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#94a3b8')};
    font-size:14px;
    font-weight:500;
    margin-top:5px;
    margin-bottom:2px;
    padding-left:0px;
`
export const Title = Styled.p`
    color:${props => (props.isDark ? '#f9f9f9' : '#010101')};
    font-size:30px;
    font-weight:500;
    margin:0px;

    @media (max-width:700px){
        font-size:0.8rem;
    }
    @media (min-width:700px) and (max-width:980px){
        font-size:1.5rem;
    }
    @media (min-width:981px) and (max-width:1200px){
        font-size:4rem;
    }
`
export const Title1 = Styled.p`
    color:${props => (props.isDark ? '#f9f9f9' : '#010101')};
    font-size:25px;
    font-weight:500;
    margin:0px;

    @media (max-width:700px){
        font-size:0.8rem;
    }
    @media (min-width:700px) and (max-width:980px){
        font-size:1.5rem;
    }
    @media (min-width:981px) and (max-width:1200px){
        font-size:4rem;
    }
`
