import Styled from 'styled-components'

export const HomeDiv = Styled.div`
    height:100vh;
    width:100vw;
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    font-family:"Roboto";
    margin:0px;
`
export const BottomDiv = Styled.div`
    width:100%;
    height:83%;
    display:flex;
    justify-content:flex-start;
    overflow:auto;

    @media (min-width:700px){
        height:90%;
    }
`

export const RightBar = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    background-color:transparent;
    width:80%;
    height:100%;
    overflow-y:auto;
    padding-top:0px;

    @media (max-width:700px){
        width:100%;
    }
`
export const BannerImgDiv = Styled.div`
    background-image:url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    width:100%;
    height:25%;
    padding:10px;
    background-size:cover;
    display:flex;
    justify-content:space-between;
    padding-left:1%;
    padding-right:1%;

    @media (max-width:576px){
        height:20%;
    }
`
export const BuyDiv = Styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    align-items:flex-start;
    margin-bottom:0px;
`

export const BannerLogo = Styled.img`
    width:35%;

    @media (min-width:700px){
        width:45%;
    }
`
export const GetPara = Styled.p`
    color:#181818;
    font-size:0.8rem;
    font-weight:500;
    margin-bottom:5px;
    margin-top:5px;

    @media (min-width:700px){
        font-size:1.5rem;
    }
`
export const GetBtn = Styled.button`
    height:30px;
    padding:5px;
    width:40%;
    background-color:transparent;
    border-color:#181818;
    color:#181818;
    font-size:10px;
    border-radius:10px;

    @media (min-width:700px){
        height:38px;
        width:48%;
        font-size:1.2rem;
    }
`

export const SearchDiv = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    width:100%;
    height:8%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    position:sticky;
    top:0%;
    padding-left:1%;
    margin:0px;
`
export const InputAndIcon = Styled.div`
    height:98%;
    width:55%;
    background-color:transparent;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin:0px;
    padding-top:1%;

    @media (max-width:600px){
        width:80%;
    }
`
export const SearchInput = Styled.input`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    height:70%;
    width:85%;
    color:${props => (props.bgColor ? '#f8f8f8' : '#181818')};
    padding-left:1%;
    font-size:16px;
    border-style:solid;
    border-width:2px;
    border-color:#94a3b8;
    outline:none;
    border-top-left-radius:8px;
    border-bottom-left-radius:8px;

    @media (min-width:700px){
        font-size:1rem;
    }
`
export const IconBtn = Styled.button`
    width:15%;
    height:70%;
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    border-style:solid;
    border-width:2px 2px 2px 1px;
    border-color:#94a3b8;
    cursor:pointer;
    border-top-right-radius:8px;
    border-bottom-right-radius:8px;
`
export const VideosDiv = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    width:100%;
    height:70%;
    flex-grow:1;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
`
export const FailDiv = Styled.div`
  height: 100%;
  width:100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family:"Roboto";
  background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
`
export const FailImg = Styled.img`
    width:65%;
    height:50%;
    margin-top:3%;
`
export const FailH1 = Styled.h1`
    color:${props => (props.isDark ? '#f8f8f8' : '#181818')};
    font-size:35px;
    margin-top:5px;
    margin-bottom:5px;

    @media (max-width:700px){
        font-size:20px;
    }
`

export const Failpara = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#181818')};
    font-size:20px;
    text-align:center;

    @media (max-width:700px){
        font-size:14px;
    }
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

    @media (min-width:700px){
        height:50px;
        width:120px;
    }
`
