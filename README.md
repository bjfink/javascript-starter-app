> Start the Application by running
> npm start -s


### LocalTunnel is used to create exteral url to acces the app running locally

https://localtunnel.github.io/www/
* start the app
* lt --port 3000 --subdomain localJSstarter
* the generated url will be displayed in the termial


Automated Tasks
---------------

### npm Scripts
> eliminates dependencies on plugins

### Linting
> The starter application uses eslint for file linting, it is totally customizable. Linting will occure during the building of the application.
> lint is using eslint-watch
> If the new application will contain experiamental JavaScript features, it is recommended to use babel-eslint

### Testing
>Currently configured to use the mocha testing framework for unit testing
>Tests files are located in the test folder in the root of the project
>Unit tests run on every save using node

* Framework: Mocha
* Assertion Library: chia
* DOM Mocking: JSDOM
* Query Virtual Dom: Cheerio
* CI build: Travis-CI (linx ci build)
