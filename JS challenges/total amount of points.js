function points(games) {
    let total = 0;
    for (let i = 0; i < games.length; i++) {
      let score = games[i].split(":");
      if (score[0] > score[1]) {
        total += 3;
      } else if (score[0] === score[1]) {
        total += 1;
      }
    }
    return total;
  }