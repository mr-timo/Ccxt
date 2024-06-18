// Import ccxt library
import ccxt from 'ccxt';

async function fetchBTCPrice() {
    try {
        // Create an instance of the Bybit exchange
        const exchange = new ccxt.bybit();

        // Load markets and fetch ticker for BTC/USD
        await exchange.loadMarkets();
        const ticker = await exchange.fetchTicker('BTC/USDT');

        // Output the BTC price
        console.log(`BTC/USDT Price on Bybit: ${ticker.last}`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch BTC price
fetchBTCPrice();
