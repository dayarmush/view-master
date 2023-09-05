import { useState } from 'react';
import { Link } from 'react-router-dom';


function Home({ teams }) {

    return (
      <>
        {teams && teams.map(team => {
          return <Link to={`/team/${team}`} key={team}><li>{team}</li></Link>
        })}

      </>
    )
  }

  export default Home
