# CryptoTracker

An AngularJS 1.6 dashboard showing live USD prices for Bitcoin, Ethereum,
Litecoin, and Ripple.

**▶ [View the site](https://mjsauro.github.io/CryptoTracker/)** — see the note below on why prices no longer load.

> [!IMPORTANT]
> **Archived, and no longer functional.** Both price APIs it depends on are
> gone:
>
> - **CoinDesk** (`api.coindesk.com`) — the original source, kept commented out
>   in `js/BTCService.js` and `js/BTCController.js`. The endpoint no longer
>   resolves.
> - **CryptoCompare** (`min-api.cryptocompare.com`) — what it migrated to. Still
>   online, but now returns **401** without an API key, which the free tier
>   didn't require when this was written.
>
> The layout renders; the price fields stay empty. Kept as a record of the work,
> not as a running app. It is not maintained.

## How it works

One module, `BTCApp`, with a service/controller pair per coin. Each service is a
bare `$http.get` against CryptoCompare for that symbol, and each controller
resolves it and assigns `data.data.USD` onto `$scope.USD`:

| Coin     | Service            | Controller            |
| -------- | ------------------ | --------------------- |
| Bitcoin  | `js/BTCService.js` | `js/BTCController.js` |
| Ethereum | `js/ETHService.js` | `js/ETHController.js` |
| Litecoin | `js/LTCService.js` | `js/LTCController.js` |
| Ripple   | `js/XRPService.js` | `js/XRPController.js` |

`js/DateController.js` supplies the timestamp on the page.

Worth being honest about the structure: four near-identical service/controller
pairs differing only in a ticker symbol. One service taking the symbol as a
parameter, driven by an array of coins with `ng-repeat`, would collapse the
whole thing. It's left as written — it's a snapshot of where I was in 2018.

The commented-out CoinDesk code is a useful fossil: that API returned a
different shape (`data.bpi.USD.rate_float` plus `data.time.updatedISO`), so
you can see the migration to CryptoCompare's flatter `{ USD: … }` response.

Built with AngularJS 1.6.4, Bootstrap 3.3.7, and jQuery 3.2.1 (CDN).

## Running locally

No build step and nothing to install:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

To get prices flowing again you'd need a CryptoCompare API key appended to each
service's request, or a swap to an API with an open free tier such as CoinGecko.

## About

A 2018 project, kept as-is rather than modernized. Linked from the
[archived version of my original portfolio](https://mjsauro.github.io/archive/);
my current portfolio is [here](https://d12uot6ivwmo30.cloudfront.net/).
