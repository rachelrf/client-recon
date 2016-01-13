# Set-Up

After cloning down the repo, ```cd``` into the directory and run the following:

  - Install npm dependencies.
```
> npm install
```
  - Install Postgres, if you do not already have it on your computer. Below are instructions to download Postgres using brew:
```
> brew update
> brew doctor
> brew install postgresql
```
  - Create a database called ```recon```:
```
> createdb 'recon'
```
  - Start up Postgres (in its own terminal tab) using:
```
> postgres -D /usr/local/var/postgres
```
  - Run ```npm start``` to start the server. It is configured to run with nodemon, so it will automatically restart the server as you make changes to the files.
  - Use your browser to view the app at ```localhost:3000```.