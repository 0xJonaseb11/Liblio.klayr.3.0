# Getting Started with Klayr Blockchain Client

This project was bootstrapped with [Klayr SDK](https://github.com/Klayrhq/klayr-sdk)

### Start a node

```sh
./bin/run start
```

### Add a new module

```sh
klayr generate:module ModuleName
// Example
klayr generate:module token
```

### Add a new command

```sh
klayr generate:command ModuleName Command
// Example
klayr generate:command token transfer
```

### Add a new plugin

```sh
klayr generate:plugin PluginName
// Example
klayr generate:plugin httpAPI
```

## Learn More

You can learn more in the [documentation](https://klayr.xyz/documentation/klayr-sdk/).
