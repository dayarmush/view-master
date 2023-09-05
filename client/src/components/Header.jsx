function Header({ handleClick }) {

    const sports = ['Baseball', 'Basketball', 'Football', 'Hockey']

    return (
        <header>
            <div>
                <h1>Pick a Sport</h1>
            </div>

            {sports.map(sport => {
            return (<button key={sport} onClick={handleClick}>{sport}</button>)
            })}

        </header>
    )
}

export default Header
