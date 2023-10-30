function encryptThis(message) {
    const words = message.split(" ");
    const encryptedWords = [];
  
    for (const word of words) {
      if (word.length === 1) {
        encryptedWords.push(word.charCodeAt(0).toString());
      } else if (word.length >= 2) {
        const firstChar = word.charCodeAt(0).toString();
        const lastChar = word[word.length - 1];
        const middleChars = word.slice(2, -1);
        const secondChar = word[1];
        encryptedWords.push(firstChar + lastChar + middleChars + (middleChars.length > 0 ? secondChar : ''));
      } else {
        encryptedWords.push("");
      }
    }
  
    return encryptedWords.join(" ");
  }
  
  // Teste para palavra de cinco letras
  function testEncryptThis() {
    const result = encryptThis("Hello");
    if (result === "72olle") {
      console.log("Teste para palavra de cinco letras passou.");
    } else {
      console.error("Teste para palavra de cinco letras falhou. Resultado: " + result);
    }
  }
  
  // Teste para palavra de quatro letras
  function testEncryptThisFourLetters() {
    const result = encryptThis("good");
    if (result === "103doo") {
      console.log("Teste para palavra de quatro letras passou.");
    } else {
      console.error("Teste para palavra de quatro letras falhou. Resultado: " + result);
    }
  }
  
  // Teste para duas palavras na mensagem
  function testEncryptThisMultipleWords() {
    const result = encryptThis("hello world");
    if (result === "104olle 119drlo") {
      console.log("Teste para duas palavras na mensagem passou.");
    } else {
      console.error("Teste para duas palavras na mensagem falhou. Resultado: " + result);
    }
  }
  
  // Teste para palavra de uma letra
  function testEncryptThisSingleLetter() {
    const result = encryptThis("A");
    if (result === "65") {
      console.log("Teste para palavra de uma letra passou.");
    } else {
      console.error("Teste para palavra de uma letra falhou. Resultado: " + result);
    }
  }
  
  //--------------------------------------------------------------
  
  // Teste para palavra de duas letras
  function testEncryptThisTwoLettersCreated() {
    const result = encryptThis("ab");
    if (result === "97b") {
      console.log("Teste para palavra de duas letras passou.");
    } else {
      console.error("Teste para palavra de duas letras falhou. Resultado: " + result);
    }
  }
  
  // Teste para múltiplas palavras na mensagem
  function testEncryptThisMultipleWordsCreated() {
    const result = encryptThis("apple banana cherry");
    if (result === "97eplp 98anana 99yerrh") {
      console.log("Teste para múltiplas palavras na mensagem passou.");
    } else {
      console.error("Teste para múltiplas palavras na mensagem falhou. Resultado: " + result);
    }
  }
  
  // Teste para palavra vazia
  function testEncryptThisEmptyWordCreated() {
    const result = encryptThis("");
    if (result === "") {
      console.log("Teste para palavra vazia passou.");
    } else {
      console.error("Teste para palavra vazia falhou. Resultado: " + result);
    }
  }
  
  // Teste para uma palavra com números
  function testEncryptThisNumbersCreated() {
    const result = encryptThis("1234");
    if (result === "49432") {
      console.log("Teste para palavra com números passou.");
    } else {
      console.error("Teste para palavra com números falhou. Resultado: " + result);
    }
  }
  
  // Executando os testes
  testEncryptThis();
  testEncryptThisFourLetters();
  testEncryptThisMultipleWords();
  testEncryptThisSingleLetter();
  console.log("----------------------------------------------");
  console.log("Testes do professor passaram.");
  console.log("----------------------------------------------");
  testEncryptThisTwoLettersCreated();
  testEncryptThisMultipleWordsCreated();
  testEncryptThisEmptyWordCreated();
  testEncryptThisNumbersCreated();
  console.log("----------------------------------------------");
  console.log("Testes criados passaram.");
  console.log("----------------------------------------------");
  