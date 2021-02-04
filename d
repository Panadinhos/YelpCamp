#!/bin/bash
heroku git:remote -a yelpcamp-coolt 

git add .

echo -n 'git commit -m $1'

git commit -am "$1"

git push heroku main

git push
