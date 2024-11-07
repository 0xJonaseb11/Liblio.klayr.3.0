# @klayr/tree

@klayr/tree is containing Merkle tree implementations for use with Klayr-related software

## Installation

```sh
$ npm install --save @klayr/tree
```

## Benchmarking

Node version used: v12.14.1. Computer Spec: SSD, 6 Core, 16 GB RAM. No special configuration for Node.

Benchmark results for main klayr-tree functions:

|           Function            | 1000 leaves | 10,000 leaves | 100,000 leaves |
| :---------------------------: | :---------: | :-----------: | :------------: |
|             build             |    45ms     |     240ms     |     2348ms     |
|            append             |     3ms     |      3ms      |      4ms       |
|    generateProof (1 query)    |     5ms     |      5ms      |      6ms       |
|  generateProof (100 queries)  |    50ms     |     125ms     |     172ms      |
| generateProof (1000 queries)  |    56ms     |     114ms     |     168ms      |
| generateProof (10000 queries) |     n/a     |    7993ms     |    14504ms     |
|     verifyProof (1 query)     |     3ms     |      5ms      |      5ms       |
|    verifyProof (100 query)    |    45ms     |     106ms     |     166ms      |
|   verifyProof (1000 query)    |    539ms    |     958ms     |     1592ms     |
|   verifyProof (10000 query)   |     n/a     |    8632ms     |    15909ms     |

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

[klayr core github]: https://github.com/Klayrhq/klayr
[klayr documentation site]: https://klayr.xyz/documentation/klayr-sdk/references/klayr-elements/tree.html
