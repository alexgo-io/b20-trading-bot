# b20-trading-bot

b20-trading-bot is a simple grid trading bot that allows B20 users to automate market making on B20.
It currently supports 
- market making on a single market, 
- based on the last traded price, or CoinGecko price,
- with trading grid configurable based on
  - the distance between each bid and ask (`gapRatio`),
  - the total $ size of each side (`totalSize`),
  - the number of orders on each side (`gridSize`), and
  - the frequency of position updates (`repeatIntervalInSeconds`)

To run b20-trading-bot, please follow the following steps:
1. [Set up the environment](#set-up-the-environment)
2. [Get Stacks address private key](#get-stacks-address-private-key)
3. [Update the configuration file](#update-the-configuration-file)
4. [Run b20-trading-bot](#run-the-market-making-bot)

## Set up the environment

### Install Node.js
```
> brew install node
```

## Get Stacks address private key
Bot uses your account to trade and therefore requires your private key to post orders.

```
> npx -p alex-stxdx-bot generate-private-key 0 "<24-word secret phrases>"
```

## Update the configuration file

Samples are available as `sample.json` or `sample-coingeckoId.json`.
See the [example](#example).

```
{
  "stxAddress": "<your Stacks address>",
  "stxPrivateKey": "<your Stacks address private key>",
  "stxDxMarket": "<market to trade>",
  "stxDxMarketPricePrecision": <decimal precision to determine minimum gap>,
  "stxDxMarketInitialPrice": <fallback price if price source permanently not available>,
  "stxDxAsset": "<L2 contract name>",

  "gapRatio": <multiplier to minimum decimals to separate each bid/ask>,
  "totalSize": <total one-side size in $>,
  "gridSize": <number of bid/asks on each side>,

  "repeatIntervalInSeconds": <bid/ask refresh frequency in seconds>,
  "coinGeckoId": "<CoinGecko ID>",
  "marketPriceSource": "<CoinGecko or LastTrade>"
}
```

## Run the market making bot
```
> npx alex-stxdx-bot <configuration file>
```

### Example

see [Market Information]($market-information).

```
{
  "stxAddress": "<your Stacks address>",
  "stxPrivateKey": "<your Stacks address private key>",
  "stxDxMarket": "DB20-USD",
  "stxDxMarketPricePrecision": 4, // $0.0001 is the minimum increment
  "stxDxMarketInitialPrice": 1, // if price source returns 404 error, bot falls back to this
  "stxDxAsset": "brc20-db20",

  "gapRatio": 200, // 200 * 0.0001 = $0.02 apart between each bid and ask
  "totalSize": 1000, // bid / ask sizes will target $1,000 on each side
  "gridSize": 4, // 4 bids / 4 asks

  "repeatIntervalInSeconds": 60, // the positions will be refreshed every minute  
  "marketPriceSource": "CoinGecko",
  "coinGeckoId": "alex-db20"
}
```

## Market Information
| Market | stxDxMarket | stxDxMarketPricePrecision | stxDxAsset  | coinGeckoId   |
|--------|-------------|---------------------------|-------------|:--------------|
| $B20   | DB20-USD    | 4                         | brc20-db20  | alex-db20     |
| OXBT   | OXBT-USD    | 4                         | brc20-oxbt  | oxbt          |
| LONG   | LONG-USD    | 4                         | brc20-long  | long-bitcoin  |
| ATMT   | ATMT-USD    | 8                         | brc20-aiptp | aiptp         |
| MAXI   | MAXI-USD    | 3                         | brc20-maxi  | maxi-ordinals |
| PIZA   | PIZA-USD    | 3                         | brc20-piza  | pizabrc       |
| SHNT   | SHNT-USD    | 3                         | brc20-shnt  | sats-hunters  |
| DEXM   | DEXM-USD    | 3                         | brc20-dexm  | N/A           |

