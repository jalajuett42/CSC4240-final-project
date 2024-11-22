from flask import Flask, request, jsonify
from flask_cors import CORS
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_KEY"),
)

sid_obj = SentimentIntensityAnalyzer()

app = Flask(__name__)
CORS(app)  # Apply CORS to the entire app

@app.route("/")
def hello():
	return "Hello, world!"

@app.route("/analyze", methods=["POST"])
def sentiment_analysis():
    data = request.get_json()
    print(f"Received data: {data}")  # Print received data
    sentences = data.get("sentences")  # Expecting a list of sentences
    sender = data.get("sender")
    recipient = data.get("recipient")
    
    if not sentences or not isinstance(sentences, list):
        return jsonify({"error": "Missing 'sentences' parameter or it is not a list"}), 400
    if not all([sender, recipient]):
        return jsonify({"error": "Missing 'sender' or 'recipient' parameter"}), 400
    results = []
    threshold = 0 # Any neg value above 0 will be replaced
    j = 0
    for i in sentences:
        # Perform sentiment analysis
        sentiment_result = sid_obj.polarity_scores(i)
        
        # Check if sentiment needs improvement
        if sentiment_result["neg"] > threshold:
            reworded_sentence = generate(i, sender, recipient)
            
            # Append the result for this sentence
            results.append({
                "index": j,
                "sentiment": sentiment_result,
                "rewording": reworded_sentence
            })
		
        j += 1
    
    # Return all results
    return jsonify(results)

	
def generate(sentence, sender, recipient):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"You are a {sender} emailing your {recipient}. "
                           f"You will be given a sentence that has been detected to have an overly negative tone. "
                           f"Provide a rewording of the sentence with a more neutral or positive sentiment, "
                           f"while preserving the meaning of the original.\n\n{sentence}"
            }
        ],
        model="llama3-8b-8192",
    )
    # Return the single reworded sentence
    return chat_completion.choices[0].message.content.strip()
	

if __name__ == "__main__":
	app.run(threaded=True)
