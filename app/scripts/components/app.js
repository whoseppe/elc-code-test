/* 
Purpose: 
This component is a wrapper for the two main components. It handles the state and functionality shared between the two components Home and Menu 

Notes:
- I structured this for ease of use so that both Home and Menu component can share state. In a prod env, we would use a state management like redux.
- I would like to note that the search results are getting displayed directly onto the Home page. I did this for time and simplicity. 
Ideally there is some other content on the home screen and the search results would get displayed in a modal or dropdown that overlays the main content.
- This whole project is not responsive. If I could spend more time on this I would address this immediately and make this is suitable for mobile devices. 
*/

import React, { useState } from "react";
import axios from "axios";

import Home from "./home";
import Menu from "./menu";
export default function App() {
  const [searchResults, setSearchResults] = useState(null);

  // Reduces calls to the server
  const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const processInput = debounce((e) => onSearch(e));

  const onSearch = async (e) => {
    try {
      const response = await axios.post("http://localhost:3035/api/search", {
        searchTerm: e.target.value,
      });

      setSearchResults(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="App">
      <Home searchResults={searchResults} />
      <Menu onSearch={processInput} setSearchResults={setSearchResults} />
    </div>
  );
}
