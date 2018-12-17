# coding: utf-8

import wikipedia
import pytest
import urllib.request

from GPapp.wiki import Wiki


def test_no_entry(monkeypatch):
    result = "Ma mémoire me fait défaut. " \
             "Je ne me rappelle de rien à propos de ce lieu."
    wiki = Wiki("")

    def mockreturn(request):
        return result

    monkeypatch.setattr(urllib.request, 'urlopen', result)

    assert wiki.wiki_quote() == result

def test_quote(monkeypatch):
    result = "Le saviez-tu : La tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur (avec antennes)" \
             " située à Paris, à l’extrémité nord-ouest" \
             " du parc du Champ-de-Mars en bordure de la Seine dans le 7e arrondissement. " \
             "Son adresse officielle est 5, avenue Anatole-France."
    wiki = Wiki("tour eiffel")

    monkeypatch.setattr(urllib.request, 'urlopen', result)

    assert wiki.wiki_quote() == result

