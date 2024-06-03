
const numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];

async function Pares(numeros) {
    const pares = numeros.filter(num => num % 2 === 0);
    return pares;
  }

  async function numero() {
    const pares = await Pares(numeros);
    console.log("numero:", numeros);
    console.log("numeros pares:", pares);
  }

  numero();




  
  
  
  