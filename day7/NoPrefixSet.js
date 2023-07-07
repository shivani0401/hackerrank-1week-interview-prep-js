class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
  
        current = current.children[char];
  
        if (current.isEndOfWord) {
          return false; // Current word is a prefix of another word
        }
      }
  
      if (Object.keys(current.children).length !== 0) {
        return false; // Current word is a prefix of another word
      }
  
      current.isEndOfWord = true;
  
      return true; // Successfully inserted the word
    }
  }
  
  function noPrefix(words) {
    const trie = new Trie();
  
    for (const word of words) {
      if (!trie.insert(word)) {
        console.log("BAD SET");
        console.log(word);
        return;
      }
    }
  
    console.log("GOOD SET");
  }
  