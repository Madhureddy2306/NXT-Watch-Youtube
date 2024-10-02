import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ThemeContext from './ThemeContext'
import LoginPage from './components/LoginPage'
import LoginCheck from './components/LoginChecking'
import Home from './components/Home'
import VideoDetails from './components/VideoDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedList: [],
    savedId: [],
  }

  updateTheme = () => {
    this.setState(pre => ({isDarkTheme: !pre.isDarkTheme}))
  }

  addToList = videoInfo => {
    this.setState(pre => ({
      savedList: [...pre.savedList, videoInfo],
      savedId: [...pre.savedId, videoInfo.id],
    }))
  }

  removeFromList = videoId => {
    const {savedList, savedId} = this.state

    const filteredList = savedList.filter(each => each.id !== videoId)
    const filteredIds = savedId.filter(each => each !== videoId)
    this.setState({
      savedList: filteredList,
      savedId: filteredIds,
    })
  }

  render() {
    const {isDarkTheme, savedList, savedId} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          updateTheme: this.updateTheme,
          savedList,
          savedId,
          addToList: this.addToList,
          removeFromList: this.removeFromList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <LoginCheck exact path="/" component={Home} />
          <LoginCheck exact path="/videos/:videoId" component={VideoDetails} />
          <LoginCheck exact path="/trending" component={Trending} />
          <LoginCheck exact path="/gaming" component={Gaming} />
          <LoginCheck exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
