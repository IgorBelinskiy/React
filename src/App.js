// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Setting';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-header'>
          <Header />
        </div>

        <div className='app-navbar'>
          <Navbar />
        </div>

        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.appState.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile state={props.appState.profilePage} addPost={props.addPost}/>} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
