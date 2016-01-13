# Set-Up

After cloning down the repo, ```cd``` into the directory and run the following:

1. Install npm dependencies.

```
> npm install
```

2. Install Postgres, if you do not already have it on your computer. Below are instructions to download Postgres using brew:

```
> brew update
> brew doctor
> brew install postgresql
```

3. Create a database called ```recon```:

```
> createdb 'recon'
```

4. Start up Postgres (in its own terminal tab) using:

```
> postgres -D /usr/local/var/postgres
```

5. Run ```npm start``` to start the server. It is configured to run with nodemon, so it will automatically restart the server as you make changes to the files.

6. Use your browser to view the app at ```localhost:3000```.