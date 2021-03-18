git checkout master
rm -rf ./docs
yarn build
mv ./build ./docs

git add -A
git commit -m "deploy: $(date)"
git push -f