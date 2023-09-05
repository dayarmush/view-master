from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
from teams import sports_teams

load_dotenv()

app = Flask(__name__)
cors = CORS(app)

@app.get('/games')
def get_games():
    import requests
    import os

    URL = f'https://api.seatgeek.com/2/events?performers.slug=new-york-yankees&client_id={os.environ.get("SEAT_GEEK_CLIENT_ID")}&'


    r = requests.get(url = URL)
    data = r.json()
    return sports_teams, 200

@app.get('/sport/<string:sport>')
def get_teams(sport):

    teams = sports_teams[sport.lower()]

    return sorted([team for team in teams]), 200


if __name__ == '__main__':
    app.run(port=5555, debug=True)
