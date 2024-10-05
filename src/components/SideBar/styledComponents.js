import Styled from 'styled-components'

export const SideBarDiv = Styled.div`
    background-color:#f8f8f8;
    width:25%;
    height:90vh;

    @media (max-width:700px){
        display:none;
    }

    @media (min-width:700px) and (max-width:980px){
        width:20%;
    }
`
export const CategoriesDiv = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    width:100%;
    height:80%;
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
    margin-bottom:1.5%;
`
export const CategoryItem = Styled.p`
    color:${props => (props.isDark ? '#f8f8f8' : '#181818')};
    font-size:14px;
    font-weight:500;
    margin:0%;
    padding-left:2%;

    @media (max-width:600px){
        font-size:15px;
    }

    @media (min-width:600px) and (max-width:780px){
        font-size:20px;
    }

    @media (min-width:780px) and (max-width:960px){
        font-size:25px;
    }

    @media (min-width:960px) and (max-width:1200px){
        font-size:30px;
    }

    @media (min-width:1200px){
        font-size:35px;
    }
`
export const ContactCard = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#f8f8f8')};
    width:100%;
    height:20%;
    padding:2%;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    align-items:flex-start;
`
export const ContactPara = Styled(CategoryItem)`
    font-size:1rem;
    font-weight:700;
    margin:2%;

    @media (max-width:700px){
        font-size:0.8rem;
    }
`
export const IconsDiv = Styled.div`
    width:70%;
    margin-left:3%;
    background-color:transparent;
    height:25%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:5%;

    @media (max-width:576px){
        width:100%;
    }
`
export const IconLogo = Styled.img`
    width:25%;
    height:75%;
`
export const ContactPara2 = Styled(ContactPara)`
    font-size:0.9rem;
    font-weight:500;
    margin:0px;
    width:90%;

    @media (max-width:700px){
        font-size:0.8rem;
    }
`
