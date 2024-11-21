from flask import Flask

app = Flask(__name__)

@app.route("/test")
def hello():
	return "<p>" + "Hello, world!" + "</p>"

if __name__ == "__main__":
	app.run(threaded=True)
