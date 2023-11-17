import openai

# Set your OpenAI API key
openai.api_key = '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'

# Define the initial conversation
conversation = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "hy"},
    {"role": "assistant", "content": "Hello! How can I assist you today?"}
]

# Continuously interact with the user
while True:
    # Get user input
    user_input = input("You: ")

    # Break the loop if the user types "exit"
    if user_input.lower() == 'exit':
        break

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

    # Get and print the assistant's reply
    assistant_reply = response['choices'][0]['message']['content']
    print(f"Assistant: {assistant_reply}")

    # Add the assistant's reply to the conversation
    conversation.append({"role": "assistant", "content": assistant_reply})
