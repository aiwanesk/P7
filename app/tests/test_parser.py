import pytest

from app.parser import Parser 

parse = Parser()

def test_empty():
    carac = ""
    assert parse.sentence_parser(carac) == ""

def test_no_words():
    carac = "Absolument après"
    assert parse.sentence_parser(carac) == ""

def test_no_punctuation():
    carac = "only-judge, can god?? meee,"
    assert parse.sentence_parser(carac) == "only judge can god meee"

def test_parse():
    carac = "Absolument Openclassrooms apres"
    assert parse.sentence_parser(carac) == "openclassrooms"

def test_request():
    carac = "Où est le Parc des princes"
    assert parse.sentence_parser(carac) == "parc princes"
