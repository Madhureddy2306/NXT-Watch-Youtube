import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {MobileBarDiv, NavListItem, NavCategoryItem} from './styledComponents'
import './index.css'

const MobileNavBar = props => {
  const {isDarkTheme, selectedOption, categoriesList, getUrlText} = props
  const iconCss = isDarkTheme ? 'yes' : ''

  const sendTextId = event => {
    if (getUrlText !== undefined) {
      getUrlText(event)
    }
  }

  return (
    <MobileBarDiv bgColor={isDarkTheme}>
      <Link to="/" className="link-nav">
        <NavListItem
          className={
            selectedOption === categoriesList[0].optionId ? 'bg-nav' : ''
          }
        >
          <AiFillHome
            className={
              selectedOption === categoriesList[0].optionId
                ? 'select-color-nav'
                : `category-icon-nav ${iconCss}`
            }
          />
          <NavCategoryItem
            id={categoriesList[0].optionId}
            isDark={isDarkTheme}
            onClick={sendTextId}
          >
            {categoriesList[0].displayText}
          </NavCategoryItem>
        </NavListItem>
      </Link>
      <Link to="/trending" className="link-nav">
        <NavListItem
          className={
            selectedOption === categoriesList[1].optionId ? 'bg-nav' : ''
          }
        >
          <HiFire
            className={
              selectedOption === categoriesList[1].optionId
                ? 'select-color-nav'
                : `category-icon-nav ${iconCss}`
            }
          />
          <NavCategoryItem
            id={categoriesList[1].optionId}
            isDark={isDarkTheme}
            onClick={sendTextId}
          >
            {categoriesList[1].displayText}
          </NavCategoryItem>
        </NavListItem>
      </Link>
      <Link to="/gaming" className="link-nav">
        <NavListItem
          className={
            selectedOption === categoriesList[2].optionId ? 'bg-nav' : ''
          }
        >
          <SiYoutubegaming
            className={
              selectedOption === categoriesList[2].optionId
                ? 'select-color-nav'
                : `category-icon-nav ${iconCss}`
            }
          />
          <NavCategoryItem
            id={categoriesList[2].optionId}
            isDark={isDarkTheme}
            onClick={sendTextId}
          >
            {categoriesList[2].displayText}
          </NavCategoryItem>
        </NavListItem>
      </Link>
      <Link to="/saved-videos" className="link-nav">
        <NavListItem
          className={
            selectedOption === categoriesList[3].optionId ? 'bg-nav' : ''
          }
        >
          <RiMenuAddFill
            className={
              selectedOption === categoriesList[3].optionId
                ? 'select-color-nav'
                : `category-icon-nav ${iconCss}`
            }
          />
          <NavCategoryItem
            id={categoriesList[3].optionId}
            isDark={isDarkTheme}
            onClick={sendTextId}
          >
            {categoriesList[3].displayText}
          </NavCategoryItem>
        </NavListItem>
      </Link>
    </MobileBarDiv>
  )
}

export default MobileNavBar
