function towerBreakers(n, m) {
    // If the number of towers or the height of the towers is even,
  // the first player will always win.
  if (n % 2 === 0 || m === 1) {
    return 2; // Second player wins
  } else {
    return 1; // First player wins
}
}