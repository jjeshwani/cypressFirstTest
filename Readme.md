#####
----- 

#### Steps after creating repository

- `npm init -y`
- `npm install cypress`
- `npx cypress open` will create structure of cypress folders (tests -> integration folder)
- add `Readme.md` file
- add `.gitingnore` file
- add to `.gitignore`: .idea, node-modules, `...`
- git commit, git push

#### Run the tests:

- `npm run start` or `npm cypress open`

#### TODO 

- follow the structure write action instead of TODO `cypress/integration/e2e/toDo.js`
- integrate cypress tests with Circleci by creating `circle.yml`
