# SETUP TAILWIND

1. package.json erzeugen

```dotnetcli
npm init -y 
```

2. node_modules und package-lock.json erzeugen

```dotnetcli
npm install -D tailwindcss
```

3. tailwind.config.js erzeugen

```dotnetcli
npx tailwindcss init
```

4. src Ordner erzeugen

```dotnetcli
mkdir src
```

5. style.css erzeugen in src Ordner

```dotnetcli
cd src
```

```dotnetcli
touch style.css
```

6. dist Ordner erzeugen

```dotnetcli
cd ..
```

```dotnetcli
mkdir dist
```

7. in der erzeugten style.css Datei folgendes einfügen:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

8. Erzeuge mit folgendem Terminal Befehl output.css

```dotnetcli
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

9. Erzeuge index.html in src Ordner

```dotnetcli
cd src
```

```dotnetcli
touch index.html
```

10. Verlinke die output.css Datei innerhalb des Heads der index.html Datei

```html
<link href="/dist/output.css" rel="stylesheet">
```

11. Nun kannst du deine index.html Datei mit tailwind stylen!