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
<<<<<<< HEAD


=======
    
>>>>>>> 702b707efcd049aa39a6d60b43fb4f3024418b85
def test_quote(monkeypatch):
    result = "Le saviez-tu : OpenClassrooms est une école en ligne qui propose à ses membres des cours certifiants \
    et des parcours débouchant sur un métier d'avenir, réalisés en interne, par des écoles, des universités, \
    ou encore par des entreprises partenaires comme Microsoft ou IBM"
    wiki = Wiki("Openclassrooms")

    def mockreturn(request):
        return result

    monkeypatch.setattr(urllib.request, 'urlopen', result)

<<<<<<< HEAD
    assert wiki.wiki_quote() == result
=======
    assert wiki.wiki_quote() == result
>>>>>>> 702b707efcd049aa39a6d60b43fb4f3024418b85
