import { useState } from 'react';
import "./App.css";
import PeopleCards from "./components/PeopleCards/PeopleCards";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogOutClick = () => {
    setIsLoggedIn(false);
  };

  return (


    <div>
      <div>

        {isLoggedIn ? (<div>
          <h1>React basic Steps</h1>

          <button onClick={handleLogOutClick}>Log out</button>
        </div>) :
          (<div> <h2>Please Log In</h2>
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
