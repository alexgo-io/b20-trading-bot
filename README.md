# b20-trading-bot

To run b20-trading-bot, please follow the following steps:
1. [Set up the environment](#set-up-the-environment)
2. [Update the configuration file](#update-the-configuration-file)
3. [Run b20-trading-bot](#run-the-market-making-bot)

## Set up the environment
```
> yarn add alex-stxdx-bot
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
```
{
  "stxAddress": "<your Stacks address>",
  "stxPrivateKey": "<your Stacks address private key>",
  "stxDxMarket": "DB20-USD", // see [Market Information]($market-information)
  "stxDxMarketPricePrecision": <decimal precision to determine minimum gap>, // see [Market Information]($market-information)
  "stxDxMarketInitialPrice": <fallback price if price source permanently not available>,
  "stxDxAsset": "<L2 contract name>", // see [Market Information]($market-information)

  "gapRatio": <multiplier to minimum decimals to separate each bid/ask>,
  "totalSize": <total one-side size in $>,
  "gridSize": <number of bid/asks on each side>,

  "repeatIntervalInSeconds": <bid/ask refresh frequency in seconds>,
  "coinGeckoId": "<CoinGecko ID>", // see [Market Information]($market-information)
  "marketPriceSource": "<CoinGecko or LastTrade>"
}
```

## Market Information
| Market | stxDxMarket | stxDxMarketPricePrecision | stxDxAsset | coinGeckoId |
| ---- | -------- | -- | ---------- | :---------- |
| $B20 | DB20-USD | 4 | brc20-db20 | alex-db20 |

