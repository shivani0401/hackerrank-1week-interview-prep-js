function bfs(n, m, edges, s) {
    // Create an adjacency list to represent the graph
    const graph = Array.from({ length: n + 1 }, () => []);
  
    // Build the adjacency list from the given edges
    for (let i = 0; i < m; i++) {
      const [start, end] = edges[i];
      graph[start].push(end);
      graph[end].push(start);
    }
  
    // Create an array to store the distances from the start node
    const distances = Array(n + 1).fill(-1);
  
    // Create a queue for the BFS traversal
    const queue = [];
    queue.push(s);
    distances[s] = 0;
  
    while (queue.length > 0) {
      const current = queue.shift();
  
      // Explore the neighbors of the current node
      for (const neighbor of graph[current]) {
        if (distances[neighbor] === -1) {
          // Neighbor node hasn't been visited yet
          queue.push(neighbor);
          distances[neighbor] = distances[current] + 6;
        }
      }
    }
  
    // Remove the distance to the start node and return the distances array
    distances.splice(s, 1);
    distances.splice(0, 1);
    return distances;
  }
  