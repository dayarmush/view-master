import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Games from "./Games"

function TeamPage() {

    const { name } = useParams()
    const [games, setgames] = useState([])
    const teamName = name.toLowerCase().split(' ').join('-')

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/games/${teamName}`)
                const data = await response.data
                if (response.statusText === 'OK') {
                    setgames(data.seat_geek)
                }
            } catch (err) {
                console.log('error')
            }
        }
        fetchData()
    }, [name])

    return (
        <div>
            <h1>{name}</h1>
            {games && games.map(game => {
                return <Games key={game.id} game={game}/>
            })}
        </div>
    )
}

export default TeamPage
