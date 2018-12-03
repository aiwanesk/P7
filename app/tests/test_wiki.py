# coding: utf-8

import wikipedia
import pytest
import urllib.request

from app.wiki import Wiki


def test_no_entry(monkeypatch):
    result = "Je me rappelle plus"
    wiki = Wiki("")

    def mockreturn(request):
        return result

    monkeypatch.setattr(urllib.request, 'urlopen', result)

    assert wiki.wiki_quote() == result


def test_quote(monkeypatch):
    result = "Le saviez-tu : OpenClassrooms est une école en ligne qui propose à ses membres des cours certifiants \
    et des parcours débouchant sur un métier d'avenir, réalisés en interne, par des écoles, des universités, \
    ou encore par des entreprises partenaires comme Microsoft ou IBM"
    wiki = Wiki("Openclassrooms")

    def mockreturn(request):
        return result

    monkeypatch.setattr(urllib.request, 'urlopen', result)

    assert wiki.wiki_quote() == result