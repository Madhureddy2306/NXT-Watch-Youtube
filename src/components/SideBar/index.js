import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {
  SideBarDiv,
  CategoriesDiv,
  ListItem,
  CategoryItem,
  ContactCard,
  ContactPara,
  IconsDiv,
  IconLogo,
  ContactPara2,
} from './styledComponents'
import './index.css'

const SideBar = props => {
  const {isDarkTheme, selectedOption, categoriesList, getUrlText} = props

  const iconCss = isDarkTheme ? 'yes' : ''

  const sendText = event => {
    if (getUrlText !== undefined) {
      getUrlText(event)
    }
  }

  return (
    <SideBarDiv>
      <CategoriesDiv bgColor={isDarkTheme}>
        <Link to="/" className="link">
          <ListItem
            className={
              selectedOption === categoriesList[0].optionId ? 'bg' : ''
            }
          >
            <AiFillHome
              className={
                selectedOption === categoriesList[0].optionId
                  ? 'select-color'
                  : `category-icon ${iconCss}`
              }
            />
            <CategoryItem
              id={categoriesList[0].optionId}
              isDark={isDarkTheme}
              onClick={sendText}
            >
              {categoriesList[0].displayText}
            </CategoryItem>
          </ListItem>
        </Link>
        <Link to="/trending" className="link">
          <ListItem
            className={
              selectedOption === categoriesList[1].optionId ? 'bg' : ''
            }
          >
            <HiFire
              className={
                selectedOption === categoriesList[1].optionId
                  ? 'select-color'
                  : `category-icon ${iconCss}`
              }
            />
            <CategoryItem
              id={categoriesList[1].optionId}
              isDark={isDarkTheme}
              onClick={sendText}
            >
              {categoriesList[1].displayText}
            </CategoryItem>
          </ListItem>
        </Link>
        <Link to="/gaming" className="link">
          <ListItem
            className={
              selectedOption === categoriesList[2].optionId ? 'bg' : ''
            }
          >
            <SiYoutubegaming
              className={
                selectedOption === categoriesList[2].optionId
                  ? 'select-color'
                  : `category-icon ${iconCss}`
              }
            />
            <CategoryItem
              id={categoriesList[2].optionId}
              isDark={isDarkTheme}
              onClick={sendText}
            >
              {categoriesList[2].displayText}
            </CategoryItem>
          </ListItem>
        </Link>
        <Link to="/saved-videos" className="link">
          <ListItem
            className={
              selectedOption === categoriesList[3].optionId ? 'bg' : ''
            }
          >
            <RiMenuAddFill
              className={
                selectedOption === categoriesList[3].optionId
                  ? 'select-color'
                  : `category-icon ${iconCss}`
              }
            />
            <CategoryItem
              id={categoriesList[3].optionId}
              isDark={isDarkTheme}
              onClick={sendText}
            >
              {categoriesList[3].displayText}
            </CategoryItem>
          </ListItem>
        </Link>
      </CategoriesDiv>
      <ContactCard bgColor={isDarkTheme}>
        <ContactPara isDark={isDarkTheme}>CONTACT US</ContactPara>
        <IconsDiv>
          <IconLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <IconLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <IconLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </IconsDiv>
        <ContactPara2 isDark={isDarkTheme}>
          Enjoy! Now to see your channels and recommendations!
        </ContactPara2>
      </ContactCard>
    </SideBarDiv>
  )
}

export default SideBar
