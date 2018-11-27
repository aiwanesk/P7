import wikipedia


wikipedia.set_lang("fr")

search = wikipedia.search("One piece")

if search == []:
    print("J'ai rien trouvé wolah")
else:
    title_page = search[0]
    text = wikipedia.summary(title_page, sentences = 2)
    print(text)
