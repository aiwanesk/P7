import pytest
import requests
import urllib.request

from app.map import GoogleMap

# no entry
def test_no_entry(monkeypatch):
    result = ""
    Gmap = GoogleMap("")

    monkeypatch.setattr(urllib.request, 'urlopen', result)

    assert Gmap.get_gps_coord() == result

# Stade de France
def test_get_coord(monkeypatch):
    result = {'lat': 48.9244592, 'lng': 2.3601645}
    Gmap = GoogleMap("Stade de france")

    monkeypatch.setattr(urllib.request, 'urlopen', result)

    assert Gmap.get_gps_coord() == result


# 
