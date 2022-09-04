# express-gateway-api

This sample project is for managing gateways - master devices that control multiple peripheral devices. A REST service (JSON/HTTP) for storing information about these gateways and their associated devices.

---
## Requirements

For development, you will only need Node.js and a node global package, PNPM, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Pnpm installation
  On POSIX systems, you may install pnpm even if you don't have Node.js installed, using the following script:

      $ curl -fsSL https://get.pnpm.io/install.sh | sh -

  If you don't have curl installed, you would like to use wget:

      $ wget -qO- https://get.pnpm.io/install.sh | sh -

  On Windows (PowerShell):

      $ iwr https://get.pnpm.io/install.ps1 -useb | iex

  Using NPM

      $ npm install -g pnpm

---

## Install

    $ git clone https://github.com/darianalvarezt/express-gateway-api
    $ cd express-gateway-api
    $ pnpm install

## Configure app

Open the root directory and copy the .env file. You will need:

- .env file;

## Running the project

    $ pnpm run start

## Runing test

    $ pnpm run test
