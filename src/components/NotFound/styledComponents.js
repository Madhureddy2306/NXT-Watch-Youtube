import Styled from 'styled-components'

export const VideoDetailsDiv = Styled.div`
    height:100vh;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#f8f8f8')};
    font-family:"Roboto";
`
export const BottomDiv = Styled.div`
    display:flex;
    justify-content:flex-start;
    background-color:red;
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
