function Games({ game }) {

var dateObject = new Date(game.datetime_local);
// Format options for date and time
var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true, // Use 12-hour format (AM/PM)
};

// Format the date and time as a string
var formattedTime = dateObject.toLocaleString(undefined, options);

    return(
        <>
            <h2> {game.title} </h2>
            <h4>Game Time: {formattedTime} </h4>
            <h4>Most Expensive Ticket Price: ${game.stats.highest_price} </h4>
            <h4>Average Ticket Price: ${game.stats.average_price} </h4>
            <h4>Median Ticket Price: ${game.stats.median_price} </h4>
            <h4>Cheapest Ticket Price: ${game.stats.lowest_sg_base_price_good_deals} </h4>
            <h4>Tickets Remaining: {game.stats.listing_count}</h4>
            {game.taxonomies[1].name === 'baseball' && <img src={game.performers[0].image} alt={game.title}/>}
            <div>
                <a href={game.url} target='_blank'>Link To Tickets</a>
            </div>
        </>
    )
}

export default Games
