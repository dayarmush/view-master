import Header from "./components/Header"
import Home from "./components/Home"
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from "react"
import axios, {isCancel, AxiosError} from 'axios';
import TeamPage from "./components/TeamPage";
axios.defaults.baseURL = `http://localhost:5555`

function App() {

  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')

  const navigate = useNavigate()


  async function handleClick(e) {

    navigate('/')

    try {
      const response = await axios.get(`/sport/${e.target.textContent}`)
      const data = response.data
      if (response.statusText === 'OK') {
        setTeams(data)
      } else {
        setError(data)
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <Header handleClick={handleClick}/>
      <main>
        <Routes>
          <Route path="/" element={<Home teams={teams}/>} />
          <Route path='/team/:name' element={<TeamPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
