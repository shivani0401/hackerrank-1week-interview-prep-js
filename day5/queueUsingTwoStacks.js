function processData(input) {
    const queries = input.split("\n").slice(1);
  const queue = [];

  for (let i = 0; i < queries.length; i++) {
    const [operation, value] = queries[i].split(" ");

    if (operation === "1") {
      queue.push(value);
    } else if (operation === "2") {
      queue.shift();
    } else if (operation === "3") {
      console.log(queue[0]);
    }
  }

}