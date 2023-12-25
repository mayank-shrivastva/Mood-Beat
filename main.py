from flask import Flask, render_template, request, jsonify
import json
import random

app = Flask(__name__)

def load_intents():
    with open("mk.json", "r", encoding="utf-8") as file:
        intents = json.load(file)
    return intents

def get_response(intents, user_input):
    user_input = user_input.lower()
    for intent in intents['intents']:
        for pattern in intent['patterns']:
            if pattern.lower() in user_input:
                return random.choice(intent['responses'])
    return random.choice(intents['intents'][3]['responses'])

intents = load_intents()

@app.route('/')
def index():
    return render_template('index.html', response=None, user_input=None)

@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/song')
def song():
    return render_template('song.html')

@app.route('/movie')
def movie():
    return render_template('movie.html')

@app.route('/joke')
def joke():
    return render_template('joke.html')

@app.route('/service')
def service():
    return render_template('service.html')

@app.route('/contact-us')
def contact_us():
    return render_template('contact-us.html')

@app.route('/trym')
def trym():
    return render_template('trym.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    user_input = request.form['user_input']
    response = get_response(intents, user_input)
    return render_template('chat.html', response=response, user_input=user_input)

# Placeholder for the 'chat' endpoint, replace it with your actual chat logic
@app.route('/chat')
def chat():
    return render_template('chat.html', response="Chat functionality coming soon!", user_input=None)

if __name__ == '__main__':
    app.run(debug=True)
