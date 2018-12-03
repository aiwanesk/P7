# coding: utf-8

import wikipedia

class Wiki:

    def __init__(self, place):
        wikipedia.set_lang("fr")
        self.place = " " + place

    def wiki_quote(self):
        search = wikipedia.search(self.place)
        if search == []:
            result = ("Je me rappelle plus")
        else:
            title_page = search[0]
            text = wikipedia.summary(title_page, sentences = 1)
            result = ("Le saviez-tu : " + text)
        return result

sdf = Wiki("Stade de France")

print(sdf.wiki_quote())
<<<<<<< HEAD
=======

>>>>>>> 702b707efcd049aa39a6d60b43fb4f3024418b85
