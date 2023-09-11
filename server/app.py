import os
import requests
from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
from teams import sports_teams
from datetime import datetime

load_dotenv()

app = Flask(__name__)
cors = CORS(app)

def from_iso_format(time):
    parsed_timestamp = datetime.fromisoformat(time).strftime("%A, %d %B %Y %I:%M %p")
    return parsed_timestamp

@app.get('/games/<string:team>')
def get_games(team):
    URL = f'https://api.seatgeek.com/2/events?performers.slug={team}&client_id={os.environ.get("SEAT_GEEK_CLIENT_ID")}'
    r = requests.get(url = URL)
    data = r.json()

    return {'seat_geek': data['events']}, 200

@app.get('/sport/<string:sport>')
def get_teams(sport):

    teams = sports_teams[sport.lower()]

    return sorted([team for team in teams]), 200


if __name__ == '__main__':
    app.run(port=5555, debug=True)
