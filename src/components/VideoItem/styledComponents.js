import Styled from 'styled-components'

export const VideoBodyDiv = Styled.div`
    width:100%;
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    margin-bottom:1%;
`
export const VideoImg = Styled.img`
    width:100%;
    height:55%;
    background-size:cover;
`
export const IconAndTitle = Styled.div`
    width:100%;
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
`
export const SecondDiv = Styled.div`
    display:flex;
    padding:0px;
    justify-content:flex-start;
    flex-direction:column;
    align-items:flex-start;
`

export const Title = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#181818')};
    font-size:1rem;
    margin:0px;
`
export const ChannelImg = Styled.img`
    width:10%;
    height:10%;
    border-radius:5%;
    margin-right:5px;
    margin-top:2%;
`
export const ChannelName = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#94a3b8')};
    font-size:0.8rem;
    margin-top:2px;
    margin-bottom:2px;
    margin-right:2px;
`
export const ViewsAndTime = Styled.div`
    height:25px;
    width:70%;
    display:flex;
    justify-content:space-between;
    margin:0px;
`
export const ListTime = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#94a3b8')};
    font-size:0.8rem;
    margin-top:2px;
    margin-bottom:2px;
    padding-left:0px;
`
