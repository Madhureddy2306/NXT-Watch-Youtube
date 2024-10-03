import Styled from 'styled-components'

export const GamingDiv = Styled.div`
    height:100vh;
    width:100vw;
    background-color:${props => (props.bgColor ? '#0f0f0f ' : '#f9f9f9')};
    font-family:"Roboto";
    margin:0px;
`
export const BottomDiv = Styled.div`
    height:85%;
    width:100%;
    display:flex;
    justify-content:flex-start;
    background-color:transparent;
`
export const RightBar = Styled.div`
    width:75%;
    height:100%;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};

    @media (max-width:700px){
        width:100%;
    }
`
export const RightDiv = Styled.div`
    width:100%;
    height:100%;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
`

export const GamingHeadingDiv = Styled.div`
    width:100%;
    background-color:${props => (props.bgColor ? '#010101' : '#d7dfe9')};
    height:10%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const GamingIconDiv = Styled.div`
    background-color:${props => (props.bgColor ? '#d7dfe9' : 'lightcyan')};
    height:70%;
    width:10%;
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
export const GameDisplayDiv = Styled.ul`
    list-style-type:none;
    padding-left:0px;
    width:100%;
    height:90%;
    padding:1%;
    overflow-y:auto;
    display:flex;
    justify-content:space-around;
    align-items:flex-start;
    flex-wrap:wrap;
    margin:0px;
`
export const GameCard = Styled.div`
    width:100%;
    height:100%;
    padding:1%;
    margin-bottom:1.5%;
`
export const GameImg = Styled.img`
    height:65%;
    width:100%;
    background-size:cover;
`
export const Title = Styled.p`
    color:${props => (props.isDark ? '#f9f9f9' : '#010101')};
    font-size:16px;
    font-weight:500;
    margin-bottom:2px;
    margin-top:2px;
`
export const Title1 = Styled.p`
    color: #475569;
    font-size:12px;
    font-weight:500;
    margin:0px;
`
