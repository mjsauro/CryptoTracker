# CryptoTracker

An AngularJS 1.6 dashboard showing live USD prices for Bitcoin, Ethereum,
Litecoin, and Ripple.

**▶ [View the site](https://mjsauro.github.io/CryptoTracker/)**

> [!NOTE]
> **Archived and no longer maintained**, but working. Both price APIs this
> originally used have since gone away:
>
> - **CoinDesk** (`api.coindesk.com`) — the original source, kept commented out
>   in `js/BTCService.js` and `js/BTCController.js`. The endpoint no longer
>   resolves.
> - **CryptoCompare** (`min-api.cryptocompare.com`) — what it migrated to. Still
>   online, but now returns **401** without an API key, which the free tier
>   didn't require when this was written.
>
> Rather than leave it dead, the four services now read Coinbase's keyless spot
> endpoint. That is the only change: each service reshapes the response into the
> `{ data: { USD: … } }` form the controllers already expected, so the
> controllers, templates, and `index.html` are exactly as written in 2018. The
> pre-fix state is tagged
> [`v1-original-site`](https://github.com/mjsauro/CryptoTracker/tree/v1-original-site).

## How it works

One module, `BTCApp`, with a service/controller pair per coin. Each service is a
bare `$http.get` for that symbol, and each controller resolves it and assigns
`data.data.USD` onto `$scope.USD`:

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
you can see the migration to CryptoCompare's flatter `{ USD: … }` response —
the same shape the services now rebuild by hand from Coinbase's payload.

Built with AngularJS 1.6.4, Bootstrap 3.3.7, and jQuery 3.2.1 (CDN).

## Running locally

No build step and nothing to install:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Coinbase's spot endpoint needs no key and sends `Access-Control-Allow-Origin: *`,
so prices load from `localhost` as readily as from the deployed site.

## About

A 2018 project, kept as-is apart from the swapped price endpoint. Linked from the
[archived version of my original portfolio](https://mjsauro.github.io/archive/);
my current portfolio is [here](https://d12uot6ivwmo30.cloudfront.net/).
