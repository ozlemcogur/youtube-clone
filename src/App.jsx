import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "./pages/Feed"
import Header from "./components/Header"
import VideoDetail from "./pages/VideoDetail"
import SearchResult from "./pages/SearchResult"


function App() {
 

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path="/watch" element={<VideoDetail/>}/>
      <Route path="/results" element={<SearchResult/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
