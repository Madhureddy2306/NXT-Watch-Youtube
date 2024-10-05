import Styled from 'styled-components'

export const MobileBarDiv = Styled.nav`
    width:100%;
    height:7%;
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    padding-left:2px;
    padding-right:2px;

    @media (min-width:700px){
        display:none;
    }
`
export const NavListItem = Styled.li` 
    list-style-type:none;
    width:100%;
    height:100%;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:52px;
`
export const NavCategoryItem = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#181818')};
    font-size:1.8rem;
    font-weight:500;

    @media (max-width:600px){
        font-size:0.9rem;
    }
`
