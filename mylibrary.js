//1. Write a function that accepts a multi-dimensional container
//of any size and converts it into a one dimensional associative array
//whose keys are strings representing their value's path in the original container.
//2.Now write a separate function to do the reverse.

let myLibrary = {
    "Contos Inacabados": {
      autor: "Tolkien",
      pages: 624,
    },
  
    "Guia do Mochileiro": {
      autor: "Douglas Adams",
      pages: 208,
    },
  
    "Misto Quente": {
      autor: "Bukowski",
      pages: 320,
    },
  };
  
  let prateleira = [];
  let nomeLivro = [];
  let autor = [];
  let pages = [];
  
  function createSentence(item) {
    const [nomeLivro, value] = item.flat();
    return `${nomeLivro}/${value.autor}/${value.pages}`;
  }
  
  function LibraryInventory(libraryList) {
    const conversao = Object.entries(libraryList);
    return conversao.map(createSentence);
  }
  var stringarr = LibraryInventory(myLibrary);
  console.log(stringarr);
  
  function reverseLibrary(stringarr) {
    const arraystring = stringarr
      .map(function (item) {
        return item.split("/");
      })
      .reduce(function (target, [nomeLivro, autor, pages], index) {
        target[nomeLivro] = {
          autor: autor,
          pages: pages,
        };
        return target;
      }, {});
    console.log(arraystring);
  }
  reverseLibrary(stringarr);
  