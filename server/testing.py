# https://api.seatgeek.com/2

# Resource Endpoints
# /events
# /events/{EVENT_ID}
# /performers
# /performers/{PERFORMER_ID}
# /venues
# /venues/{VENUE_ID}


import requests
import os

URL = f'https://api.seatgeek.com/2/events?client_id={os.environ.get("SEAT_GEEK_CLIENT_ID")}&venue.state=NY&taxonomies.name=sports'


r = requests.get(url = URL)
data = r.json()


print(data)
