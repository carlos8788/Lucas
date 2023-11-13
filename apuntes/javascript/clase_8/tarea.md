### Métodos Básicos de Arrays

1. **push()**
   - Añade uno o más elementos al final de un array.
   - Modifica el array original.
   - Devuelve la nueva longitud del array.

   ```javascript
   let frutas = ['manzana', 'plátano'];
   frutas.push('naranja'); // ['manzana', 'plátano', 'naranja']
   ```

2. **pop()**
   - Elimina el último elemento de un array.
   - Modifica el array original.
   - Devuelve el elemento eliminado.

   ```javascript
   let frutas = ['manzana', 'plátano', 'naranja'];
   let fruta = frutas.pop(); // 'naranja'
   ```

3. **shift()**
   - Elimina el primer elemento de un array.
   - Modifica el array original.
   - Devuelve el elemento eliminado.

   ```javascript
   let frutas = ['manzana', 'plátano'];
   let fruta = frutas.shift(); // 'manzana'
   ```

4. **unshift()**
   - Añade uno o más elementos al principio de un array.
   - Modifica el array original.
   - Devuelve la nueva longitud del array.

   ```javascript
   let frutas = ['manzana', 'plátano'];
   frutas.unshift('naranja'); // ['naranja', 'manzana', 'plátano']
   ```

5. **slice()**
   - Extrae una sección de un array y devuelve un nuevo array.
   - No modifica el array original.

   ```javascript
   let frutas = ['manzana', 'plátano', 'naranja'];
   let frutasCitricas = frutas.slice(1, 3); // ['plátano', 'naranja']
   ```


### Métodos Básicos de Objetos

1. **Object.keys()**
   - Devuelve un array con los nombres de las propiedades enumerables de un objeto.

   ```javascript
   let persona = { nombre: 'Juan', edad: 30 };
   let claves = Object.keys(persona); // ['nombre', 'edad']
   ```

2. **Object.values()**
   - Devuelve un array con los valores de las propiedades enumerables de un objeto.

   ```javascript
   let persona = { nombre: 'Juan', edad: 30 };
   let valores = Object.values(persona); // ['Juan', 30]
   ```

3. **Object.entries()**
   - Devuelve un array con pares de propiedades [clave, valor] de un objeto.

   ```javascript
   let persona = { nombre: 'Juan', edad: 30 };
   let entradas = Object.entries(persona); // [['nombre', 'Juan'], ['edad', 30']]