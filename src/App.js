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
  //   let posts = [
  //     { id: 1, message: 'Hi, how are you?', countLike: 15 },
  //     { id: 2, message: 'It\'s my first post', countLike: 20 },
  //     { id: 3, message: 'blala', countLike: 2 }
  //  ]

  // let dialogs = [
  //   { id: 1, name: 'Igor' },
  //   { id: 2, name: 'Katya' },
  //   { id: 3, name: 'Vanya' },
  //   { id: 4, name: 'Roma' },
  //   { id: 5, name: 'Petsa' },
  //   { id: 6, name: 'Sanya' }
  // ]

  // let messages = [
  //   { id: 1, message: 'Hi' },
  //   { id: 2, message: 'How is your it-kamasutra' },
  //   { id: 3, message: 'Yo' }
  // ]
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
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
