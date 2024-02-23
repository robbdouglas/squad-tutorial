# Mongoose Schemes & Subschemes

## Aufgabe

### Teil A: Initialisierung des Projekts und Einrichtung des Servers

1. Erstelle einen leeren Ordner! Füge hier eine server.js Datei ein und erstelle mit einem geeigneten Befehl eine package.json Datei.
2. Was musst du in der package.json Datei ändern, wenn du wichtige Module mit import anstatt require einbinden möchtest?
3. Welche drei Module benötigst du, um einen express Server zu verwenden, mit einer .env Datei zu arbeiten und um Mongoose zu benutzen? Installiere diese mit einem geeigneten Terminalbefehehl!
4. Baue das Grundgerüst in der server.js Datei auf! Importiere die benötigten Module und erstelle eine Express App!
5. Erstelle eine .env Datei und füge eine Variable für den Port ein!
6. Welche Datei benötigst du, um den Ordner node_modules und die .env Datei zu ignorieren? Erstelle diese Datei und fülle sie entsprechend aus!
7. Sorge dafür, dass der Server auf dem Port aus der .env Datei läuft!
8. Teste deinen Server, indem du ihn startest und eine GET Anfrage an die Root schickst!

### Teil B: Mongoose - Verbinden von VS Code und MongoDB

1. Erstelle in MongoDB Atlas ein neues Projekt mit dem Namen "mongoose-schemes-tutoring"! Füge ein Deployment mit dem Clusternamen "mongoose-schemes-cluster" hinzu und bestimme einen Usernamen und ein Passwort! Füge anschließend die IP 0.0.0.0/0 hinzu und navigiere zum Overview!
2. Füge den Connection String in die .env Datei ein und ersetze das Passwort und den Datenbanknamen durch die entsprechenden Variablen!
3. Verbinde MongoDB Compass mit Hilfe deines Links!
4. Erstelle eine Datei mit dem Namen db-connect.js und schreibe einen geeigneten Code, um MongoDB mit Mongoose zu verbinden! Teste die Verbindung, indem du eine Nachricht in der Konsole ausgibst!

### Teil C: Mongoose Models und Schemes

1. Erstelle einen Ordner mit dem Namen "models" und füge eine Datei mit dem Namen "footballPlayersModel.js" hinzu!
2. Definiere den notwendigen Import, um mit Models und Schemes in Mongoose zu arbeiten!
3. Erstelle ein neues Scheme auf Basis des folgenden Beispiels:

```javascript
name: {
firstName: "Julian",
lastName: "Brandt"
},
age: 27,
birthday: "1996-05-02"
club: "Borussia Dortmund",
playerNumber: 19,
position: "Midfielder"
previousTeams: {
numberOfPreviousClubs: 2,
namesOfPreviousClubs: ["Bayer Leverkusen", "VfL Wolfsburg"]
}

```

4. Erstelle ein neues Model auf Basis des Schemes und exportiere es!

### Teil D: Controllers

1. Erstelle einen Ordner mit dem Namen "controllers" und füge eine Datei mit dem Namen "footballPlayersControllers.js" hinzu!

2. Fülle diese Datei, indem du das vorher erstellte Model importierst und eine async Funktion erstellst, die alle Spieler aus der Datenbank zurückgibt! Erstelle außerdem eine zweite Funktion, die einen Spieler anhand seiner ID zurückgibt!

3. Füge eine weitere Funktion hinzu, die einen neuen Spieler in die Datenbank einfügt!

Notiz: Denke dabei an ein geeignetes einfaches Error Handling und eine Nachricht für den Fall, dass ein Spieler bereits existiert! Sollte alles funktionieren, gebe eine Nachricht aus, dass der neue Spieler erfolgreich hinzugefügt wurde!

### Teil E: Routes

1. Erstelle einen Ordner mit dem Namen "routes" und füge eine Datei mit dem Namen "footballPlayersRoute.js" hinzu!

2. Sorge in dieser Datei dafür, dass deine eben erstellten Funktionen aus dem Controller funktionieren und wähle dabei geeignete Namen für deine Endpoints!

### Teil F: Letzte Schritte und Testen des Codes

1. Vervollständige deine server.js Datei, indem du die Routes einbindest und den Server startest!
2. Vergiss nicht, eine geeignete Middleware für das Parsen von JSON zu verwenden!
3. Nutze Insomnia (oder Postman), um das Abrufen aller Spieler und eines einzelnen Spielers zu testen!
4. Füge einen neuen Spieler deiner Wahl hinzu und beachte dabei dein erstelltes Schema! Überprüfe anschließend mit Hilfe von Compass, ob der Spieler erfolgreich hinzugefügt wurde!

### Teil G: Arbeiten mit Schemes und Subschemes

1. Sorge dafür, dass alle künftig neu erstellten Spieler per Default den Club "Borussia Dortmund" haben!
2. Sorge dafür, dass die Keys "name", "age" und "birthday" immer vorhanden sein müssen!
3. Sorge dafür, dass keiner der künftig erstellten Spieler mehrere _id's hat!
4. Erstelle ein Subscheme für die previousTeams und sorge dafür, dass die Anzahl der vorherigen Clubs immer vorhanden sein muss und dass die Namen der vorherigen Clubs immer vorhanden sein müssen, wenn die Anzahl größer als 0 ist!