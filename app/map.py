import requests
import json


class GoogleMap:

    def __init__(self, question):
        self.url = "https://maps.googleapis.com/maps/api/geocode/json?address="
        self.key = "Key"
        self.question = '+'.join(question.split())

    def get_gps_coord(self):
        response = requests.get(self.url + self.question + "&key=" + self.key)
        resp_json = response.json()
        try:
            return resp_json['results'][0]['geometry']['location']
        except IndexError:
            return ""

def main():
    pass

if name == "__main__":
    pass
