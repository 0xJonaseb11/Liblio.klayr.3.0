![Logo](./docs/assets/banner_sdk.png)

# Klayr SDK

[![Build status](https://github.com/Klayrhq/klayr-sdk/actions/workflows/branch.yaml/badge.svg?branch=development)](https://github.com/Klayrhq/klayr-sdk/actions/workflows/branch.yaml)
![npm](https://img.shields.io/npm/v/klayr-sdk)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/klayrhq/klayr-sdk)
![GitHub repo size](https://img.shields.io/github/repo-size/klayrhq/klayr-sdk)
[![DeepScan grade](https://deepscan.io/api/teams/6759/projects/8869/branches/113509/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6759&pid=8869&bid=113509)
![GitHub issues](https://img.shields.io/github/issues-raw/klayrhq/klayr-sdk)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/klayrhq/klayr-sdk)
[![codecov](https://codecov.io/gh/Klayrhq/klayr-sdk/branch/development/graph/badge.svg?token=2JhT7caf5x)](https://codecov.io/gh/Klayrhq/klayr-sdk)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)

## What is the Klayr SDK?

The Klayr SDK aims to provide an easy and reliable software development kit for building blockchain applications which are compatible with the Klayr protocol.

The [architecture](#architecture-overview) of the Klayr SDK has been designed so that it can be extended to meet the requirements of a wide variety of blockchain application use cases.

The codebase is written entirely in JavaScript/TypeScript, which means for a majority of developers, no significant change of tools or mindset is required to get started.

The Klayr SDK makes every effort to allow developers to focus simply and purely on writing the code that matters to their own blockchain application, and nothing more.

## Usage

Klayr SDK is an all-in-one package that provides you with tools to create, run and maintain blockchain applications in JavaScript/TypeScript.

### Dependencies

The following dependencies need to be installed in order to run blockchain clients created with the Klayr SDK.

#### Node.js

If you are using NVM, install the correct version as shown below:

```sh
nvm install v18.20
```

#### Klayr Commander

It is recommended to install Klayr Commander globally with NPM (Node Package Manager), to facilitate the convenient usage of the Klayr Commander CLI.

```sh
npm install --global klayr-commander@beta
```

To check the successful installation of Klayr Commander, run the following command:

```sh
$ klayr --version
klayr-commander/6.1.2 darwin-arm64 node-v18.20.4
```

#### Toolchain dependencies

Once Klayr Commander is installed, install the following compiler dependencies as well.

##### Ubuntu

```sh
sudo apt update
sudo apt install -y libtool automake autoconf curl build-essential python2-minimal
```

##### macOS

Ensure that [Homebrew](https://brew.sh/) is installed.

```sh
brew install autoconf automake libtool python2
```

### Initializing a new blockchain client

Execute the `klayr init` command of Klayr Commander as shown below, to bootstrap a default blockchain client in the current folder.

```sh
klayr init
```

As a result of executing the `init` command, you will be asked for the _Name_, _ChainID_, _Description_, _Author_, and _License_ of the new blockchain client.

```
Using template "klayr-ts"
Initializing git repository
Updating .klayrrc.json file
Creating project structure
? Application name my_client
? Chain ID in hex representation. ChainID must be 4 bytes (8 characters) 12345678
? Application description A simple blockchain client for my Web3 application
? Author XYZ
? License ISC
```

Next, all the required files are created by Klayr Commander.

It is now already possible to start the newly bootstrapped blockchain client with default configurations for a local Devnet:

```sh
./bin/run start
```

### Configure your blockchain parameters

The blockchain client offers a variety of configuration options such as `blockTime`, `maxTransactionsSize`, and much more.

For a complete overview of the client configuration options, please check out the [SDK configuration reference](https://klayr.xyz/documentation/klayr-sdk/v6/config.html) and the [Blockchain client configuration](https://klayr.xyz/documentation/beta/build-blockchain/configuration.html) guide.

To use the custom config with the client, use the `--config` flag.
Also add the `--overwrite-config` flag, if you used another config the last time the client was started.

```sh
./bin/run start --config config/custom_config.json --overwrite-config
```

### Registering new modules and plugins

A [module](https://klayr.xyz/documentation/beta/understand-blockchain/sdk/modules-commands.html) defines the logic that makes state changes on-chain, meaning that it will be a part of the blockchain protocol.

A [plugin](https://klayr.xyz/documentation/beta/understand-blockchain/sdk/plugins.html), on the other hand, defines an off-chain logic that is not part of the blockchain protocol but enhances the blockchain application features.

Add your new module or plugin to your blockchain client conveniently with Klayr Commander:

#### Generating a new module

Use the `generate:module` command in the root folder of the blockchain client to generate a ready-to-use module template.

```sh
klayr generate:module my-module-name
```

For more detailed explanations how to create a module, please refer to the guide [How to create a module](https://klayr.xyz/documentation/beta/build-blockchain/module/index.html)

#### Generating a new plugin

Use the `generate:plugin` command in the root folder of the blockchain client to generate a ready-to-use plugin template.

```sh
klayr generate:plugin my-plugin-name
```

For a more detailed explanation of how to create a plugin, please refer to the guide: [How to create a plugin](https://klayr.xyz/documentation/beta/build-blockchain/plugin/index.html)

### Documentation

For further explanations, guides and tutorials, see the [official Klayr SDK documentation](https://klayr.xyz/documentation/klayr-sdk/v6).

## Architecture Overview

The Klayr SDK operates on the NodeJS runtime and consists primarily of an application framework (Klayr Framework), a collection of libraries providing blockchain application functionalities (Klayr Elements), and a powerful command-line tool (Klayr Commander) helping developers to build a blockchain application using Klayr Framework.
The diagram below provides a high-level overview of the architecture:

![Diagram](./docs/assets/diagram_sdk.png)

### Packages

| Directory                | Description                                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Framework](./framework) | An application framework responsible for establishing and maintaining the interactions between the modules of a Klayr blockchain application.        |
| [Elements](./elements)   | A collection of libraries, each of them implementing some form of blockchain application functionality such as cryptography, transactions, p2p, etc. |
| [Commander](./commander) | A command line tool to help developers to build a blockchain application using Klayr Framework.                                                      |

## Get Involved

| Reason                          | How                                                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------- |
| Want to chat with our community | [Reach them on Discord](https://discord.gg/klayr)                                               |
| Found a bug                     | [Open a new issue](https://github.com/Klayrhq/klayr/issues/new)                                 |
| Found a security issue          | [See our bounty program](https://blog.lisk.com/announcing-lisk-bug-bounty-program-5895bdd46ed4) |
| Want to develop with us         | [Create a fork](https://github.com/Klayrhq/klayr/fork)                                          |

## How to Contribute

To contribute to `klayr-sdk`, `framework` or `elements`:

1. Clone the repository: `git clone https://github.com/Klayrhq/klayr-sdk.git`

2. Install [Yarn Classic](https://classic.yarnpkg.com/en/docs/install) globally

3. Install dependencies and build:
   1. `yarn`
   2. `yarn build`

### Testing your local `klayr-sdk` in your application.

In order to link your local klayr-sdk repository and test your application which uses `klayr-sdk`, simply follow the steps below in your local `klayr-sdk` repository and run `yarn link klayr-sdk` in the root of your application.

1. `cd sdk`

2. `yarn link`

3. Once you have linked your local repo, every time you make changes in `klayr-sdk/elements` you must build packages before testing:

   a. To build all packages: `npm run build` or `yarn build`

   b. To build specific package: `yarn workspace <package name> build` or go into each package folder and `yarn build` or `npm run build`
   Example: `yarn workspace @klayr/p2p build`

**Note:** In case you face any issues during the installation, make sure you have the right version of `yarn` and `node` and try resetting the project with `yarn clean:full`.

## Contributors

https://github.com/Klayrhq/klayr-sdk/graphs/contributors

## Disclaimer

By using the Beta release of the Klayr SDK, you acknowledge and agree that you have an adequate understanding of the risks associated with the use of the Beta release of the Klayr SDK and that it is provided on an “as is” and “as available” basis, without any representations or warranties of any kind.
To the fullest extent permitted by law, in no event shall the Klayr Labs or other parties involved in the development of the Beta release of the Klayr SDK have any liability whatsoever to any person for any direct or indirect loss, liability, cost, claim, expense or damage of any kind, whether in contract or in tort, including negligence, or otherwise, arising out of or related to the use of all or part of the Beta release of the Klayr SDK.

## License

Copyright 2016-2023 Lisk Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
