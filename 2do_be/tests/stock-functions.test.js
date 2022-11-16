const stockFunctions = require("./stock-functions");

test("Testing empty portfolio -- success", () => {
  const target = 0;
  const result = stockFunctions.CreatePortfolio();
  expect(result.size).toBe(target);
});

test("Testing empty portfolio via SizeOfPortfolio -- success", () => {
  const target = 0;
  const result = stockFunctions.CreatePortfolio();
  expect(stockFunctions.SizeOfPortfolio(result)).toBe(target);
});

const MattsPortfolio = stockFunctions.CreatePortfolio();

//Bought 5 GME and 10 RBLX

test("Testing 5 GME and 10 RBLX = 2 total stocks-- success", () => {
  const target = 2;
  stockFunctions.BuyStocks(MattsPortfolio, "GME", 5);
  stockFunctions.BuyStocks(MattsPortfolio, "RBLX", 10);
  expect(stockFunctions.SizeOfPortfolio(MattsPortfolio)).toBe(target);
});

//BOUGHT 3 GME, 2 RBLX, 10 TSLA

test("Buy 3 shares of GME, 2 shares of RBLX, 10 shares of TSLA-- success", () => {
  const GME = 8;
  const RBLX = 12;
  const TSLA = 10;
  stockFunctions.BuyStocks(MattsPortfolio, "GME", 3);
  stockFunctions.BuyStocks(MattsPortfolio, "RBLX", 2);
  stockFunctions.BuyStocks(MattsPortfolio, "TSLA", 10);
  expect(stockFunctions.GetNumSharesPerStock(MattsPortfolio, "GME")).toBe(GME);
  expect(stockFunctions.GetNumSharesPerStock(MattsPortfolio, "RBLX")).toBe(RBLX);
  expect(stockFunctions.GetNumSharesPerStock(MattsPortfolio, "TSLA")).toBe(TSLA);
});


//Selling time

test("Sell 2 GME, 4 RBLX, 3 TSLA -- success", () => {
  const GME = 6;
  const RBLX = 8;
  const TSLA = 7;
  stockFunctions.SellStocks(MattsPortfolio, "GME", 2);
  stockFunctions.SellStocks(MattsPortfolio, "RBLX", 4);
  stockFunctions.SellStocks(MattsPortfolio, "TSLA", 3);
  expect(stockFunctions.GetNumSharesPerStock(MattsPortfolio, "GME")).toBe(GME);
  expect(stockFunctions.GetNumSharesPerStock(MattsPortfolio, "RBLX")).toBe(RBLX);
  expect(stockFunctions.GetNumSharesPerStock(MattsPortfolio, "TSLA")).toBe(TSLA);
});

//Sell all of TSLA, and TSLA shouldn't exist
test("Portfolio should only keep owned symbols -- success", () => {
  const TSLA = 0;
  stockFunctions.SellStocks(MattsPortfolio, "TSLA", 7);
  expect(stockFunctions.GetNumSharesPerStock(MattsPortfolio, "TSLA")).toBeUndefined();
});


//Expect to raise and exception here
test("Raise a ShareSaleException-- success", () => {
  expect(() => stockFunctions.SellStocks(MattsPortfolio, "GME", 7)).toThrow('ShareSaleException');
});
