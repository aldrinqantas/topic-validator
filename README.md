# Topic Validator

Given the below object:

{
“topic”: “A”,
“name”: “a”,
“description”: “something”
}

Write a validator to check following rules:
1. If topic == A, then name will be “a” and description will be more than 10 and less
than 100 chars
2. If topic == B, then name will be “x” and description will be less than 40 chars

Note: there will be more topic D, E, F …. In the future and combinations of validation rules
on name and description are varying.

---

## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

### Npm installation

After installing node, this project will need NPM too, so just run the following command.

      $ npm install -g

---

## Install

    $ git clone https://github.com/aldrinqantas/topic-validator.git
    $ cd topic-validator
    $ npm install

## Running test project

    $ npm run test
