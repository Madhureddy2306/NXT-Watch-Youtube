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
export const SideBarDiv = Styled.div`
    background-color:#f8f8f8;
    width:24%;
    height:90vh;
`
export const CategoriesDiv = Styled.div`
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
    width:100%;
    height:70%;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    align-items:flex-start;
    padding:2px;
`
export const ListItem = Styled.p`
    list-style-type:none;
    padding-left:5px;
    width:100%;
    height:30px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    cursor:pointer;
    margin-bottom:2%;
`
export const CategoryItem = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#0f0f0f')};
    font-size:14px;
    font-weight:600;
    margin-left:5%;
`
export const ContactCard = Styled.div`
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
    width:100%;
    height:30%;
    padding:2%;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    align-items:flex-start;
`
export const ContactPara = Styled(CategoryItem)`
    font-size:14px;
    font-weight:700;
`
export const IconsDiv = Styled.div`
    width:70%;
    margin-left:3%;
    background-color:transparent;
    height:25%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const IconLogo = Styled.img`
    width:25%;
    height:75%;
`
export const ContactPara2 = Styled(ContactPara)`
    font-size:14px;
    font-weight:500;
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
    font-size:14px;
    font-weight:500;
    margin:0px;
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
