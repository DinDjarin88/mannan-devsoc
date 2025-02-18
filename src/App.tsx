import { useState } from 'react'
import './App.css'
// import  Header  from './components/Menu.tsx'
import PersonalIntro from './components/LandingPageBody.tsx'
import ProjectsList from './components/ProjectsPage.tsx';
import ContactMe from './components/ContactMe.tsx';



function App() {


  //useState hook used to reactively show the current page
  const [displayedPage, setDisplayedPage] = useState('LandingPage'); 


  //function that renders pages
  function renderPage() {

    switch(displayedPage) {
        case 'LandingPage':
          return <PersonalIntro />  
        case 'ProjectsList':
          return <ProjectsList key = {key}/>
        case 'ContactMe':
          return <ContactMe />
        default: return null;
    }    
  }


//Using the key prop to cause REACT to unmount, remount and reset the projects component (this resets the state of any child components as well)
  const [key, setKey] = useState(0);


  const setAndLoadPage = () => {
    setKey(prevKey => prevKey + 1);
    setDisplayedPage('ProjectsList');
  }



  return (

    //Menu Loading

    <>
      <div className="whole-site-container">
        <h1>Mannan's Travel Agency</h1>
        <hr className="top-menu-bar"></hr>
        <div className="Buttons">
          <text className="airbus">Airbus A380</text>
          <a className="menuButton">ㅤㅤㅤㅤㅤㅤㅤ</a>
          <a className="menuButton" onClick={() => setDisplayedPage('LandingPage')}>Home Continent</a>
          <a className="menuButton" onClick={ setAndLoadPage }>Projects Islands</a>
          <a className="menuButton" onClick={() => setDisplayedPage('ContactMe')}>Contact Capitol</a>
          <a className="menuButton">ㅤㅤㅤㅤㅤㅤㅤ</a>
        </div>
        <hr className="top-menu-bar"></hr>

      </div>
      {renderPage()}
    </>

  )
}

export default App
