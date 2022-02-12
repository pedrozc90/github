#!/bin/bash

# install required
# npm install --global @vercel/ncc

# compile action
ncc build index.js --source-map --out dist
