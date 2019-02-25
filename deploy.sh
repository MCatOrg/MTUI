set -e

npm run vbuild

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:MCatOrg/MTUI.git master:gh-pages

cd -