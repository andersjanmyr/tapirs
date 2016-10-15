#!/bin/bash

set -o errexit

git push heroku deploy:master
