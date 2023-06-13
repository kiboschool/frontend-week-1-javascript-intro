#!/usr/bin/env bash

# copy files with tests
cp -r ../0* ./
# copy package.json
cp ../package.json ../jest.config.js ./

TESTS=$(ls ./0*/*/*.test.js)
zip -r gradescope.zip setup.sh run_autograder package.json jest.config.js $TESTS

# remove copied files
rm -r ./0*
rm package.json
rm jest.config.js
