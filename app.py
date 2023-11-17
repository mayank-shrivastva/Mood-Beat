import openai
from flask import Flask, render_template, request

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = 'Api-key'

# Define the initial conversation
conversation = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "assistant", "content": "Hello! How can I assist you today?"}
]

@app.route('/')
def home():
    return render_template('index.html', conversation=conversation)

@app.route('/submit', methods=['POST'])
def submit():
    user_input = request.form['user_input']

    # Add the user's message to the conversation
    conversation.append({"role": "user", "content": user_input})

    # Generate a chat-based completion
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=conversation,
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    # Get the assistant's reply
    assistant_reply = response['choices'][0]['message']['content']

    # Add the assistant's reply to the conversation
    conversation.append({"role": "assistant", "content": assistant_reply})

    return render_template('index.html', conversation=conversation)

if __name__ == '__main__':
    app.run(debug=True)
