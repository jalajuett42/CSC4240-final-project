from flask import Flask, request
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

@app.route("/")
def hello():
	return "Hello, world!"

# pass one sentence at a time
@app.route("/analyze", methods=["GET"])
def sentiment_analysis():
	sentence = request.args.get("sentence")
	return sid_obj.polarity_scores(sentence)
	
@app.route("/generate", methods=["GET"])
def generate():
	sentence = request.args.get("sentence")
	chat_completion = client.chat.completions.create(
		messages=[
			{
			    "role": "user",
			    "content": "You will be given a sentence that has been detected to have an overly negative tone. Provide three rewordings of the sentence with more neutral or positive sentiments, while preserving the meaning of the original. Do not respond with anything besides the three rewordings, split by a single newline.\n\n" + sentence
			}
		],
		model="llama3-8b-8192",
	)
	return chat_completion.choices[0].message.content.split('\n')[2:5] # hardcoded indexes since it wastes 2 lines saying "here's some alternate phrasings\n"
	

if __name__ == "__main__":
	app.run(threaded=True)
