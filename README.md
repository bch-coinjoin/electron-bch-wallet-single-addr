# electron-bch-wallet-single-addr
This is a web-based single page app (SPA) written in React. It provides non-custodial wallet features for the Bitcoin Cash blockchain, including support for SLP tokens and NFTs. It is forked from [bch-wallet-web3-android](https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-android), but modified. The android components have been removed and replaced with [Electron.js](https://www.electronjs.org/) to convert the web app to a Desktop application.


## Installation
```bash
git clone https://github.com/bch-coinjoin/electron-bch-wallet-single-addr
cd electron-bch-wallet-single-addr
npm install
npm start
```

## Development
You can run the React app separately and develop in a browser, without any use of Electron:
- `npm run start`

You can build the React app and then run it inside Electron:
- `npm run build`
- `npm run electron`

## Support

Have questions? Need help? Join our community support
[Telegram channel](https://t.me/bch_js_toolkit)

## Donate

This open source software is developed and maintained by the [Permissionless Software Foundation](https://psfoundation.cash). If this library provides value to you, please consider making a donation to support the PSF developers:

<div align="center">
<img src="./img/donation-qr.png" />
<p>bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr</p>
</div>

## License
[MIT](./LICENSE.md)
