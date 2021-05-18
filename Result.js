class Result {
    // stawki za wygrane przy  poszczególnych  trafieniach 
 static moneyWinInGame(result, bid, draw) {
  if (result == 100) return 300 * bid;
  else if (result == 10) return 30 * bid;
  else if (result == 1) return 3 * bid;
  else return 0;
 }

 static checkWinner(draw) {
    //  sprawdzanie trafienia 5 takich samych symboli
  if (draw[0] === draw[1] && draw[1] === draw[2] && draw[2] === draw[3] && draw[3] === draw[4] ) return 100;
//   sprawdzenie trafienia 4 takich samych symboli
  else if ((draw[0] === draw[1] && draw[1] === draw[2] && draw[2] === draw[3]) || (draw[1] === draw[2] && draw[2] === draw[3] && draw[3] === draw[4]) ||( draw[1] === draw[2] && draw[1] === draw[0] && draw[1] === draw[4]) || (draw[0] === draw[2] && draw[2] === draw[3] && draw[3] === draw[4]) || (draw[1] === draw[0] && draw[0] === draw[3] && draw[3] === draw[4]) ) return 10;
//   sprawdzenie  trafienia  3 takich samych symboli 
  else if ((draw[0] === draw[1] && draw[1] === draw[2]) || (draw[0] === draw[1] && draw[1] === draw[3] )|| (draw[0] === draw[1] && draw[1] === draw[4] )|| (draw[0] === draw[2] && draw[2] === draw[3]) ||( draw[0] === draw[2] && draw[4] === draw[2]) || (draw[0] === draw[3] && draw[3] === draw[4]) || (draw[2] === draw[1] && draw[3] === draw[2] )|| (draw[1] === draw[2] && draw[2] === draw[4]) ||( draw[2] === draw[3] && draw[2] === draw[4]) || (draw[1] === draw[3] && draw[3] === draw[4] )) return 1;
  else return false
 }
}

