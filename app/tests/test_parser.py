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
    carac = "Absolument 2 Openclassrooms apres"
    assert parse.sentence_parser(carac) == "2 openclassrooms"

def test_request():
    carac = "Salut GrandPy ! Est-ce que tu connais l'adresse d'OpenClassrooms ?"
    assert parse.sentence_parser(carac) == "salut grandpy connais adresse openclassrooms"
