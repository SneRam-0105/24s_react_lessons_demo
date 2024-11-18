import { useState } from 'react';
// import Button from './components/Button';
import "./App.css";
import PeopleCards from "./components/PeopleCards/PeopleCards";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginClick = () => {
    setIsLoggedIn((prevState) => !prevState); //it takes the previous state which is logged in and it will change that state. This way it lets react to know which is the current state and use that.
  };

  const handleLogOutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div>
        {isLoggedIn ? (
          <div id="header">

            <button onClick={handleLogOutClick}>Log out</button>
          </div>) :


          (<div> <h2>Please Log In Here</h2>
            <button onClick={handleLoginClick}>Log in </button> </div>)
        }

      </div>
      <div id='people' >
        <PeopleCards props={isLoggedIn} />
      </div>

    </div>

  );
}






export default App;
