import requests

class GoogleMap:

    def __init__(self, question):
        self.url = "https://maps.googleapis.com/maps/api/geocode/json?address="
        self.key = "AIzaSyCPU0-dQgr2zz98_GJgsNy4M4LuNGg5S2o"
        self.question = '+'.join(question.split())

    def get_gps_coord(self):
        response = requests.get(self.url + self.question + "&key=" + self.key)
        resp_json = response.json()
        try:
            return resp_json['results'][0]['geometry']['location']
        except IndexError:
            return "1"

#def main():

#    question = "tour eiffel"
#    gmap = GoogleMap(question)
#    print(gmap.get_gps_coord())

#main()