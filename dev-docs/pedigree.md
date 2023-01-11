# Pedigree

This code repository is forked from [bch-wallet-web-android](https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-android). That is considered the [upstream](https://www.javatpoint.com/git-upstream-and-downstream) repository. Changes that need to be made to the wallet UI should be made to that repository, and then pulled into this downstream repository. The changes should not be made to this respository.

The purpose of *this* repository (electron-bch-wallet-single-addr) is to serve as a *wrapper* and *boilerplate*. This repository wraps the code from `bch-wallet-web-android` with code to turn it into an [Electron.js](https://www.electronjs.org/) desktop app. That is all this repository is intended to do. This code repository will then act as a boilerplate, in the sense that this code will be forked to create an HD wallet version of the Electron desktop app.

By preserving this code as a boilerplate, it can be used for many projects in the future. HD wallets are a special case, and it's much easier to build applications with single-address wallets. That's why it's good to preserve this as a boilerplate.
