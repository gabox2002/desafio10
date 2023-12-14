class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    mostrarDatosEnConsola() {
        console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`);
    }
    mostrarDatosEnAlert() {
        alert(`Título: ${this.titulo}. - Autor: ${this.autor}`);
    }
    getTitulo() {
        return this.titulo;
    }
    mostrarDatos(tipo = "console") {
        let mensaje = `${this.titulo}, de ${this.autor.toUpperCase()}`;

        if (tipo === "alert") {
            window.alert(mensaje);
        } else {
            console.log(mensaje);
        }
    }
}

let unLibro = new Libro("Ángeles y Demonios", "Dan Brown");

console.log(unLibro); // 2. En consola --> Libro {titulo: 'Ángeles y Demonios', autor: 'Dan Brown'}

unLibro.mostrarDatosEnConsola(); // 3. En consola --> Ángeles y Demonios, de DAN BROWN

unLibro.mostrarDatosEnAlert(); // 4. En Alert --> Título: Ángeles y Demonios. - Autor: Dan Brown

let nuevolibro = new Libro("Fuego y Sangre", "George R. R. Martin");
let tituloDelNuevoLibro = nuevolibro.getTitulo();
alert(tituloDelNuevoLibro); // 5. En Alert --> Fuego y Sangre

// 6.
nuevolibro.mostrarDatos("alert");   // En Alert --> Fuego y Sangre, de GEORGE R. R. MARTIN
nuevolibro.mostrarDatos("console"); // En Consola --> Fuego y Sangre, de GEORGE R. R. MARTIN
nuevolibro.mostrarDatos();          // En Consola --> Fuego y Sangre, de GEORGE R. R. MARTIN
