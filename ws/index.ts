import WebSocket from "ws";

const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcbrl@bookTicker");

function clearTerminal() {
  process.stdout.write("\x1Bc");
}

ws.onmessage = (event: any) => {
  clearTerminal();
  const data = JSON.parse(event.data);
  const response = {
    symbol: data.s,
    bestAsk: data.a,
    bestBid: data.b,
  };
  console.log("data: ", data);
  console.log(response);
};
