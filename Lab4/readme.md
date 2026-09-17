# NPM project

1. create project folder
2. right click on project folder and click open in integrated terminal
3. type 'npm init -y' press enter
4. open package.json file
5. update type as 'module' in package.json
6. type in terminal 'npm i nodemon -D' to install nodemon ,which restarts server while file changes. -D flag indicate install as dev dependency.
7. it creates node_modules folder and package-lock.json
8. update .gitignore file and write folder_name/node_modules
9. update package.json to run the project,update script property.
    "scripts":{
        "start":"node app.js",
        "dev":"nodemon app.js"
    }
10. now you can start the server by typing `npm run dev` in the terminal of project folder.
