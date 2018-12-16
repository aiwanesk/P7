# coding: utf-8

import wikipedia

class Wiki:

    def __init__(self, place):
        wikipedia.set_lang("fr")
        self.place = " " + place

    def wiki_quote(self):
        search = wikipedia.search(self.place)
        if search == []:
            result = ("Ma mémoire me fait défaut. "
                      "Je ne me rappelle de rien à propos de ce lieu.")
        else:
            title_page = search[0]
            text = wikipedia.summary(title_page, sentences = 2)
            result = ("Le saviez-tu : " + text)
        return result


