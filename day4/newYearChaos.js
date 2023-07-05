function minimumBribes(q) {
    let bribes = 0;
  let tooChaotic = false;

  for (let i = 0; i < q.length; i++) {
    const originalPosition = q[i] - 1;

    if (originalPosition - i > 2) {
      tooChaotic = true;
      break;
    }

    for (let j = Math.max(0, originalPosition - 1); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }
}