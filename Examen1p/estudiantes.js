estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
    name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

    async function nombre(estudiantes) {
        const edad = estudiantes.filter(nom => 18);
        return edad;
      }
    
      async function en() {
        const edad = await Pares(estudiantes);
        console.log("tu eres :", estudiantes);
        
      }

      en();