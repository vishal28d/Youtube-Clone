import React from 'react'
import {AppContext} from './context/contextAPI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideosDetails" ; 

const App = () => {
  return (
    <AppContext>
  <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route exact path="/" elements={<Feed />} />
          <Route 
              exact path="searchResult/:searchQuery" 
                elements={<SearchResult />} 
            />
          <Route 
              exact path="/video/:id" 
                elements={<VideoDetails />} 
            />
        </Routes>

      </div>
  </BrowserRouter>
    </AppContext>
  )
}

export default App;