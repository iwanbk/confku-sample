import logging
import random
import string

from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)
app.debug = True

HOST = "0.0.0.0"
PORT = 5151

CONFKU_HUB_HOST = 'localhost'
CONFKU_HUB_PORT = 8001

logging.basicConfig(level=logging.DEBUG)

def random_str_generator():
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(10))

@app.route('/conf/public')
def conf_public_setup():
	"""
	Public conf:
	- generate random url
	- redirect to the room
	"""
	rand_url = random_str_generator()
	return redirect(url_for('conf_public_room', room_id=rand_url))

@app.route('/conf/public/room/<room_id>')
def conf_public_room(room_id):
	return render_template('public.html', hub_host = CONFKU_HUB_HOST,
		hub_port = CONFKU_HUB_PORT, room_id = room_id)
	

@app.route('/')
def home():
	return render_template('index.html')

def main():
	app.run(host = HOST, port = PORT)

if __name__ == '__main__':
	main()