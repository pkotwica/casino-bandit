class Result {
 static moneyWinInGame(result, bid, draw) {
  if (result == 100) return 1000 * bid;
  else if (result == 10) return 40 * bid;
  else if (result == 1) return 5 * bid;
  else return 0;
 }

 static checkWinner(draw) {
  if (draw[0] === draw[1] && draw[1] === draw[2] && draw[2] === draw[3] && draw[3] === draw[4] ) return 100;
  else if ((draw[0] === draw[1] && draw[1] === draw[2] && draw[2] === draw[3]) || (draw[1] === draw[2] && draw[2] === draw[3] && draw[3] === draw[4]) ||( draw[1] === draw[2] && draw[1] === draw[0] && draw[1] === draw[4]) || (draw[0] === draw[2] && draw[2] === draw[3] && draw[3] === draw[4]) || (draw[1] === draw[0] && draw[0] === draw[3] && draw[3] === draw[4]) ) return 10;
  else if ((draw[0] === draw[1] && draw[1] === draw[2]) || (draw[0] === draw[1] && draw[1] === draw[3] )|| (draw[0] === draw[1] && draw[1] === draw[4] )|| (draw[0] === draw[2] && draw[2] === draw[3]) ||( draw[0] === draw[2] && draw[4] === draw[2]) || (draw[0] === draw[3] && draw[3] === draw[4]) || (draw[2] === draw[1] && draw[3] === draw[2] )|| (draw[1] === draw[2] && draw[2] === draw[4]) ||( draw[2] === draw[3] && draw[2] === draw[4]) ) return 1;
  else return false
 }
}

