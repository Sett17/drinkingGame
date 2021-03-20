# drinkingGame
***There is currently no plan to support internalization! This Project is in German!***

This is the source code for [this drinking game](http://drinkingapp-4376b.web.app/). It can either be played in the website, or be installed as a PWA on supported devices. TWA Version may come later.
For historical Commits and older code look in [this rep](https://github.com/Sett17/drinkingGameOLD).

## Contribute
You are very welcome to contribute! Please make a pull request with the updated [cards.js](dev/assets/cards.js).

## Run && Build
This is now a IntellijIDEA project with configured build options and the ability to run by clicking on one of the browser icons when editing the index.html.
### Run
If you are not using IntellijIDEA ultimate you can start a webserver in dev `/dev` directory.
### Build
If you are not using IntellijIDEA Ultimate you can use the `build.py` script from the console.
The cli arguments are

|arg|function|
|:---:|:---:|
|p|prebuild|
|r|refactor|
|m|minify|
|g|git|
|d|deploy|

```bash
pip3 install -r requirements.txt
python3 build.py [p r m g d]
```
**IMPORTANT** Preferably use the python installation form `/venv`

# Deutsch
Das ist der Quellcode für [dieses Trinkspiel](http://drinkingapp-4376b.web.app/). Es kann entweder auf der Internetseite gespielt werden, oder als PWA installiert werden auf unterstützten Geräten.
Für historische Commits und alten Code, schaue in [dieser rep](https://github.com/Sett17/drinkingGameOLD).

## Mitwirken
Du bist gerne zum mitwirken eingeladen! Mache dafür ein Pull Request mit der ergänzten [cards.js](dev/assets/cards.js) oder schlag eine Idee in [diesem form](https://docs.google.com/forms/d/e/1FAIpQLSejdu8sNK8tI5Y3IP0LySg17WXdkxn9s_UeRKLBvFt3kKV_Vg/viewform) vor.