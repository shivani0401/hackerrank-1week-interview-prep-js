function processData(input) {
    const queries = input.split('\n').slice(1);
  let text = '';
  const stack = [];

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i].split(' ');
    const operation = parseInt(query[0]);

    switch (operation) {
      case 1:
        stack.push(text);
        text += query[1];
        break;
      case 2:
        stack.push(text);
        const eraseCount = parseInt(query[1]);
        text = text.slice(0, text.length - eraseCount);
        break;
      case 3:
        const printIndex = parseInt(query[1]) - 1;
        console.log(text.charAt(printIndex));
        break;
      case 4:
        text = stack.pop();
        break;
      default:
        break;
    }
  }
} 