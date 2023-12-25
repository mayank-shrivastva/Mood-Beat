const msgerForm = document.querySelector(".msger-inputarea");
const msgerInput = document.querySelector(".msger-input");
const msgerChat = document.querySelector(".msger-chat");

const BOT_IMG = "../../assets/images/icons/pro1.png";
const PERSON_IMG = "../../assets/images/icons/profile.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "Kristin Williams";

const mkJsonContent = {
    "intents": [
        {
            "tag": "greeting",
            "patterns": ["Hello", "Hi", "Hey", "नमस्ते", "हाय","hy","helo", "wassup", "Howdy", "What's going on"],
            "responses": ["Hi there! How can I help you?", 
            "Hello! What can I do for you today?",
         ]
        },
        {
            "tag": "goodbye",
            "patterns": ["Goodbye", "Bye", "See you later", "अलविदा", "फिर मिलेंगे"],
            "responses": [
                "Goodbye! Have a great day!",
                "See you later!",
                 
            ]
        },
        {
            "tag": "thanks",
            "patterns": ["Thanks", "Thank you", "Appreciate it", "धन्यवाद", "शुक्रिया"],
            "responses": [
                "You're welcome!",
                "Glad I could help!",
                
            ]
        },
        {
            "tag": "unknown",
            "patterns": ["I don't know", "Sorry, I'm not sure", "मुझे नहीं पता", "मुझे माफ़ करें, मैं नहीं जानता"],
            "responses": [
                "I'm here to assist. Is there anything else you'd like to know?",
                "No problem. What else can I help you with?",
                
            ]
        },
        {
            "tag": "weather",
            "patterns": ["What's the weather like today?", "Tell me the weather forecast", "Is it going to rain?", "आज मौसम कैसा है?", "मौसम का पूर्वानुमान करो"],
            "responses": [
                "Sure, let me check the weather for you.",
                
            ]
        },
        {
            "tag": "time",
            "patterns": ["What time is it?", "Can you tell me the time?", "Time", "समय क्या है?", "क्या आप मुझे समय बता सकते हो?"],
            "responses": [
                "Certainly, the current time is [current time].",
                 
            ]
        },
        {
            "tag": "movie_info",
            "patterns": ["Tell me about movies", "Recommend a movie", "What's your favorite movie?", "फिल्मों के बारे में बताओ", "एक फिल्म सुझाओ", "तुम्हारी पसंदीदा फिल्म कौन सी है?"],
            "responses": [
                "I can provide information about movies. What specific movie are you interested in?",
                
            ]
        },
        {
            "tag": "book_info",
            "patterns": ["Recommend a book", "Tell me about books", "What's your favorite book?", "कोई बुक सुझाओ", "किताबों के बारे में बताओ", "तुम्हारी पसंदीदा किताब कौन सी है?"],
            "responses": [
                "I can recommend books or provide information about them. What genre are you interested in?",
                
            ]
        },
        {
            "tag": "calculator",
            "patterns": ["Can you do calculations?", "Calculate something for me", "Math", "क्या आप गणना कर सकते हैं?", "मेरे लिए कुछ गणना करें", "गणित"],
            "responses": [
                "Certainly! I can help with basic calculations. What do you need to calculate?",
                
            ]
        },
        {
            "tag": "joke",
            "patterns": ["Tell me a joke", "Joke of the day", "Make me laugh", "मुझे एक जोक सुनाओ", "आज का जोक", "मुझे हंसाओ" ,"another joke","joke","Joke","JOKE"],
            "responses": [
                 
                            
                         "एक छोटे बच्चे ने अपने दादा से पूछा, 'दादा, तुम्हें शादी कैसे हुई थी?' दादा ने कहा, 'बेटा, हमारी शादी एक खुली जेब में हुई थी।' बच्चा: 'वाह, दादा, तुम तो बहुत आउट ऑफ बॉक्स सोचते हो!'",
                         "Why did the scarecrow win an award? Because he was outstanding in his field!",
                         "पति: तुम मुझे वहाँ ले जा रही हो, जहाँ बहुत सारे जानवर हैं। पत्नी: हाँ, तुम्हारा घर!",
                         "Parallel lines have so much in common. It's a shame they'll never meet.",
                         "गोलू: मैं बहुत होशियार हूँ, मुझसे कोई छल नहीं हो सकता। पप्पु: अच्छा, तो इसमें बड़े होशियार होकर बता, गोलू कैसे मरा?",
                         "Why don't scientists trust atoms? Because they make up everything!",
                         "पति: यार तेरी जैसी बीवी मिली है, सबको मिले ऐसी बीवी चाहिए। पत्नी: कौन सा सब, कौन सा सब?",
                         "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
                         "टीचर: बच्चों, अगर तुम्हारा एक हाथ नकली होता और दूसरा असली, तो तुम कौन सा हाथ छुपाते? बच्चा: मैं इन्हें एक-एक करके मिला देता!",
                         "I used to play piano by ear, but now I use my hands and fingers.",
                         "पप्पु: कल मेरा बर्थडे है, तू क्या लाएगा गिफ्ट? गोलू: कुछ भी चाहिए तो कह, मैं ला दूँगा। पप्पु: अबे छोटे, मेरा बर्थडे तेरा नहीं है!",
                         "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
                         "टीचर: तुम्हारा होमवर्क कहाँ है? बच्चा: टीचर, दो तरह का होमवर्क है - एक जो तुमने बताया और दूसरा जो तुमने नहीं बताया।",
                         "I told my wife she should embrace her mistakes. She gave me a hug.",
                         "पति: तुम बहुत अच्छी लग रही हो! पत्नी: धन्यवाद, तुम भी बहुत अच्छे लग रहे हो! पति: सच में? पत्नी: हाँ, सच में, किसी और के सामने!",
                         "I only know 25 letters of the alphabet. I don't know y.",
                         "बच्चा: मुझे एक डॉल चाहिए। पैसेवाला: क्यों, तुम्हारी बहन को चाहिए क्या? बच्चा: नहीं, मेरी माँ को। बहन को तो एक भूतिया लगती है!",
                         "Why did the bicycle fall over? Because it was two-tired!",
                         "पप्पु: तू बहुत तेज़ है, तेरा बॉयफ्रेंड कैसा है? गोलू: वह भी तेज़ है। पप्पु: फिर तू उससे कैसे मिलती है? गोलू: अरे, हम हर वक्त प्रेस वाले के पास जाते हैं!",
                         "I told my wife she was drawing her eyebrows too high. She looked surprised.",
                        
                             "पति: तुम जो भी पका लो, मैं खाऊंगा! पत्नी: तू जो भी पका ले, मेरे बच्चों को मत खिला देना!",
                         
                             "Why don't scientists trust atoms? Because they make up everything!",
                        
                             
                             "टीचर: बच्चों, तुम्हारे माता-पिता क्या काम करते हैं? बच्चा: जी, वो",
                
                "Why don't scientists trust atoms? Because they make up everything!",
                "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
                "Parallel lines have so much in common. It's a shame they'll never meet.",
                "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
                "I used to play piano by ear, but now I use my hands and fingers."
            ]
        },
        {
            "tag": "news",
            "patterns": ["Tell me the latest news", "What's happening in the world?", "News update", "मुझे नवीनतम समाचार बताओ", "दुनिया में क्या हो रहा है?", "समाचार अपडेट"],
            "responses": [
                "I'm not connected to the internet, but you can check reputable news websites for the latest updates.",
                "मैं इंटरनेट से जुड़ा नहीं हूँ, लेकिन आप प्रमाणित समाचार वेबसाइट्स पर नवीनतम अपडेट के लिए चेक कर सकते हैं।"
            ]
        },



        
        
        {
            "tag": "how_are_you",
            "patterns": ["How are you?", "How's it going?", "How are you doing?", "तुम कैसे हो?", "कैसा चल रहा है?", "तुम कैसे हो रहे हो?","how r u"],
            "responses": [
                "I'm just a computer program, but I'm here and ready to assist you!",
                "Thank you for asking! I'm here to help.",
                
            ]

        }
    ]
}
msgerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  const response = getBotResponse(msgText);
  appendMessage(BOT_NAME, BOT_IMG, "left", response);
});

function appendMessage(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-bubble">
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function getBotResponse(userInput) {
  const matchedIntent = mkJsonContent.intents.find((intent) => {
    return intent.patterns.some((pattern) => {
      const regex = new RegExp(pattern, "i");  
      return regex.test(userInput);
    });
  });

  if (matchedIntent) {
    const responses = matchedIntent.responses;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return randomResponse;
  }

   return "I'm sorry, I didn't understand that.";
}
