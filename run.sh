# lsof -nP -iTCP:3000 | grep LISTEN
# kill pid
sudo kill -9 `sudo lsof -t -i:3000`
nodemon app.js
