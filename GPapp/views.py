from flask import Flask, render_template, request, jsonify

from GPapp.parser import Parser
from GPapp.map import GoogleMap
from GPapp.wiki import Wiki

app = Flask(__name__)

app.config.from_object('config')

@app.route('/', methods = ['GET', 'POST'])
@app.route('/index/', methods = ['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/result', methods = ['GET', 'POST'])
def get_data():

    parse = Parser()
    data = request.data.decode('utf-8')
    new_question = parse.sentence_parser(data)
    print(new_question)

    wiki_data = Wiki(new_question)
    wquote = wiki_data.wiki_quote()

    print(new_question)
    gmap = GoogleMap(new_question)
    gps_coord = gmap.get_gps_coord()
    print(gps_coord)

    dic =  [gps_coord, wquote]

    return jsonify(dic)
