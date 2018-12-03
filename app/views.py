from flask import Flask, render_template

from app import app 
from app.parser import Parser
from app.map import GoogleMap
from app.wiki import Wiki

app = Flask(__name__)

app.config.from_object('config')

@app.route('/')
@app.route('/index/', methods = ['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/result/', methods = ['GET', 'POST'])
def get_data():

  parse = Parser()
##    new_question = parse.sentence_parser(usr_question)
##    
##    gmap_data = GoogleMap(new_question)
##    gps_coord = gmap_data.get_gps_coord()# Return json
##
##    if !gps_coord:
##        gps_coord = ""
##
##    wiki_data = Wiki(new_question)
##    wquote = wiki.wiki_quote()
##
##    if !wquote:
##        wquote = ""
