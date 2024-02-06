# chmod +x add-user.sh --> in terminal eingeben

curl -X POST -H "Content-Type: application/json" -d '{ "id": "", "name": "Bernd", "email": "ffhawifh" }' http://localhost:3000/users