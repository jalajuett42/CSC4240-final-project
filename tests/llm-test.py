import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_KEY"),
)

sentence = "You have failed me repeatedly, and at this point, I cannot help but assume it is on purpose."

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "You will be given a sentence that has been detected to have an overly negative tone. Provide three rewordings of the sentence with more neutral or positive sentiments, while preserving the meaning of the original. Do not respond with anything besides the three rewordings, split by a single newline.\n\n" + sentence
        }
    ],
    model="llama3-8b-8192",
)

print(chat_completion.choices[0].message.content)
