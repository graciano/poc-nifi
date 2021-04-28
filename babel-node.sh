#!/bin/bash

npx babel $1 -o dist/main.js
node dist/main.js
