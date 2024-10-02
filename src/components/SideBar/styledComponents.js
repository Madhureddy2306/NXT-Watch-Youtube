import Styled from 'styled-components'

export const SideBarDiv = Styled.div`
    background-color:#f8f8f8;
    width:25%;
    height:90vh;
    background-color:blue;

    @media (max-width:700px){
        display:none;
    }
`
export const CategoriesDiv = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    width:100%;
    height:70%;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    align-items:flex-start;
    padding:2px;
`
export const ListItem = Styled.li`
    list-style-type:none;
    padding-left:5px;
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    cursor:pointer;
    margin-bottom:1%;
`
export const CategoryItem = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#181818')};
    font-size:14px;
    font-weight:500;
    margin-left:5%;

    @media (max-width:576px){
        font-size:10px;
    }
`
export const ContactCard = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
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

    @media (max-width:576px){
        width:100%;
    }
`
export const IconLogo = Styled.img`
    width:25%;
    height:75%;
`
export const ContactPara2 = Styled(ContactPara)`
    font-size:14px;
    font-weight:500;
`
