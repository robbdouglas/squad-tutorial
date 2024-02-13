Hier sind einige wichtige Konzepte und Eigenschaften von Middleware:

Verkettung von Funktionen: Middleware kann aus einer oder mehreren Funktionen bestehen, die in einer bestimmten Reihenfolge ausgeführt werden. Diese Funktionen werden nacheinander aufgerufen und haben Zugriff auf die Anfrage (request) und die Antwort (response) sowie auf den nächsten Middleware-Funktion in der Kette.

const express = require('express');
const app = express();

// Middleware-Funktion 1
const middleware1 = (req, res, next) => {
console.log('Middleware 1 ausgeführt');
next();
};

// Middleware-Funktion 2
const middleware2 = (req, res, next) => {
console.log('Middleware 2 ausgeführt');
next();
};

// Verwendung von Middleware in Express
app.use(middleware1);
app.use(middleware2);

// Endpunkt
app.get('/', (req, res) => {
res.send('Hello World');
});

app.listen(3000, () => {
console.log('Server läuft auf Port 3000');
});

Zugriff auf Anfrage und Antwort: Middleware hat Zugriff auf die Anfrage, die vom Client gesendet wird, sowie auf die Antwort, die an den Client gesendet wird. Dadurch können Middleware-Funktionen Informationen aus der Anfrage extrahieren oder bearbeiten und die Antwort entsprechend manipulieren.

const express = require('express');
const app = express();

// Middleware-Funktion
const middleware = (req, res, next) => {
console.log('Anfrage-Methode:', req.method);
console.log('Anfrage-URL:', req.url);
res.setHeader('Content-Type', 'text/plain');
next();
};

// Verwendung von Middleware in Express
app.use(middleware);

// Endpunkt
app.get('/', (req, res) => {
res.send('Hello World');
});

app.listen(3000, () => {
console.log('Server läuft auf Port 3000');
});

Interaktion mit dem nächsten Middleware: Middleware kann entscheiden, ob sie die Verarbeitung der Anfrage an die nächste Middleware-Funktion in der Kette weiterleitet oder ob sie die Verarbeitung abbricht und eine Antwort an den Client sendet. Dies geschieht normalerweise durch Aufrufen der Funktion next().

const express = require('express');
const app = express();

// Middleware-Funktion
const middleware = (req, res, next) => {
if (req.query.auth === 'true') {
next(); // Weiterleitung an die nächste Middleware
} else {
res.status(401).send('Unautorisiert');
}
};

// Verwendung von Middleware in Express
app.use(middleware);

// Endpunkt
app.get('/', (req, res) => {
res.send('Hallo Welt');
});

app.listen(3000, () => {
console.log('Server läuft auf Port 3000');
});

Funktionenbereich: Middleware kann für verschiedene Zwecke eingesetzt werden, darunter Authentifizierung, Autorisierung, Protokollierung, Datenverarbeitung, Caching, Fehlerbehandlung und vieles mehr. Sie bietet eine flexible Möglichkeit, die Funktionalität einer Anwendung zu erweitern oder zu ändern, ohne den Kern der Anwendung zu verändern.

const express = require('express');
const app = express();

// Middleware für Protokollierung
const loggingMiddleware = (req, res, next) => {
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
next();
};

// Middleware für Authentifizierung
const authMiddleware = (req, res, next) => {
if (req.headers.authorization === 'Bearer Token123') {
next(); // Weiterleitung an die nächste Middleware
} else {
res.status(401).send('Unautorisiert');
}
};

// Verwendung von Middleware in Express
app.use(loggingMiddleware);
app.use(authMiddleware);

const express = require('express');
const app = express();

// Middleware für Protokollierung
const loggingMiddleware = (req, res, next) => {
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
next();
};

// Middleware für Authentifizierung
const authMiddleware = (req, res, next) => {
if (req.headers.authorization === 'Bearer Token123') {
next(); // Weiterleitung an die nächste Middleware
} else {
res.status(401).send('Unautorisiert');
}
};

// Verwendung von Middleware in Express
app.use(loggingMiddleware);
app.use(authMiddleware);

// Endpunkt
app.get('/', (req, res) => {
res.send('Hallo Welt');
});

app.listen(3000, () => {
console.log('Server läuft auf Port 3000');
});

app.use(bodyParser.json()) ist eine Express-Middleware, die von der Bibliothek body-parser bereitgestellt wird. Diese Middleware ist darauf ausgelegt, den Anfragekörper von eingehenden HTTP-Anfragen zu parsen, die im JSON-Format vorliegen.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// body-parser Middleware zur Verarbeitung von JSON-Anfragekörpern
app.use(bodyParser.json());

// Route, die auf POST-Anfragen reagiert und den Anfragekörper zurücksendet
app.post('/data', (req, res) => {
console.log(req.body); // Zugriff auf den geparsten JSON-Anfragekörper
res.send('Daten empfangen');
});

app.listen(3000, () => {
console.log('Server läuft auf Port 3000');
});
