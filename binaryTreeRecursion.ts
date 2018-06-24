
//                A
//              /  \
//             B   C
//            /   / \
//           D   E   F
//                  / \
//                 G   H

n = {               // I put the letters in the object
  "letter": "A",    // Just to keep track of everything
  "L": {            // They're not actually used.
    "letter": "B",
    "L": {
      "letter": "D"
    }
  },
  "R": {
    "letter": "C",
    "L": {
      "letter": "E"
    },
    "R": {
      "letter": "F",
      "L": {
        "letter": "G"
      },
      "R": {
        "letter": "H"
      }
    }
  }
}

ngOnInit() {
  console.log(this.maxDepth(this.n) + " is the max depth");
}

maxDepth(node):number {
  if (!node) {
    return(0);
  }
  else {
    var lDepth = this.maxDepth(node.L);
    var rDepth = this.maxDepth(node.R);
    if (lDepth > rDepth) return(lDepth+1);
    else return(rDepth+1);
  }
}
