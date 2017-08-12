#!/usr/bin/env bash

cd documentation && \

rm -R .git
git init && \

git config user.name "Travis CI" && \
git config user.email "github@travis-ci.org" && \

git add . && \
git commit -m "Deploy to GitHub Pages" && \

git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
