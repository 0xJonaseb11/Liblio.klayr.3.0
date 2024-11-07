![Logo](../docs/assets/banner_commander.png)

# Klayr Commander

Klayr Commander is a command line tool to help developers to build a blockchain application using Klayr Framework.

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)

## Installation

```sh
$ npm install --global --production klayr-commander
```

Upon successful completion, NPM will add the `klayr-commander` executable `klayr` to your PATH.

## Usage

```shell
$ klayr COMMAND
running command...
$ klayr (-v|--version|version)
klayr-commander/5.0.0 darwin-x64 node-v12.20.0
$ klayr --help [COMMAND]
A command line interface for Klayr

VERSION
  klayr-commander/5.0.0 darwin-x64 node-v12.20.0

USAGE
  $ klayr [COMMAND]

COMMANDS
  account             Commands relating to Klayr accounts.
  autocomplete        display autocomplete installation instructions
  hash-onion
  help                Displays help.
  message             Commands relating to user messages.
  network-identifier
  passphrase          Commands relating to Klayr passphrases.
```

## Autocomplete

To use autocomplete feature for commands & flags follow the instructions after running

```sh
$ klayr autocomplete
```

### Running Tests

Klayr Commander has an extensive set of unit tests. To run the tests, please install Klayr Commander from source, and then run the command:

```sh
$ npm test
```

## Get Involved

| Reason                          | How                                                                               |
| ------------------------------- | --------------------------------------------------------------------------------- |
| Want to chat with our community | [Reach them on Discord](https://klayr.chat)                                       |
| Found a bug                     | [Open a new issue](https://github.com/klayrhq/klayr-sdk/issues/new)               |
| Found a security issue          | [See our bounty program](https://klayr.xyz/documentation/bug-bounty-program.html) |
| Want to develop with us         | [Create a fork](https://github.com/klayrhq/klayr-sdk/fork)                        |

## License

Copyright 2016-2020 Lisk Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
