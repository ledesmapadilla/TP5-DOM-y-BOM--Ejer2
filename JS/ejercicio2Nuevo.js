class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #pesoyAltura;
  #anioNacimiento;
  constructor(nombre, edad, dni, sexo, pesoyAltura, anioNacimiento) {
    (this.#nombre = nombre),
      (this.#edad = edad),
      (this.#dni = dni),
      (this.#sexo = sexo),
      (this.#pesoyAltura = pesoyAltura),
      (this.#anioNacimiento = anioNacimiento);
  }

  get getnombre() {
    return this.#nombre;
  }
  get getedad() {
    return this.#edad;
  }
  get getdni() {
    return this.#dni;
  }
  get getsexo() {
    return this.#sexo;
  }
  get getpesoyAltura() {
    return this.#pesoyAltura;
  }
  get getanioNacimiento() {
    return this.#anioNacimiento;
  }

  set setnombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set setedad(nuevoEdad) {
    this.#edad = nuevoEdad;
  }
  set setdni(nuevoDni) {
    this.#dni = nuevoDni;
  }
  set setsexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }
  set setpesoyAltura(nuevoPesoyAltura) {
    this.#pesoyAltura = nuevoPesoyAltura;
  }
  set setanioNacimiento(nuevoAnioNacimiento) {
    this.#anioNacimiento = nuevoAnioNacimiento;
  }

  /* metodos */

  mostrarGeneracion() {
    const generacion = this.#anioNacimiento;
    console.log(this.#anioNacimiento);
    document.writeln(`<h3 class=p-3>${this.#nombre}</h3>`);
    if (generacion >= 1930 && generacion <= 1948) {
      document.writeln(
        `<p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Silent Generation y su rasgo caracteristico es la Austeridad 😑</p>`
      );
    } else if (generacion >= 1949 && generacion <= 1968) {
      document.writeln(
        `<p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Baby Boom y su rasgo caracteristico es la Ambicion 🙂</p>`
      );
    } else if (generacion >= 1969 && generacion <= 1980) {
      document.writeln(
        `<p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Generacion X y su rasgo caracteristico es la Obsecion por el exito 😎</p>`
      );
    } else if (generacion >= 1981 && generacion <= 1993) {
      document.writeln(
        `  <p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Generacion Y, y su rasgo caracteristico es la Frustracion 😌</p>`
      );
    } else {
      document.writeln(
        `<p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Generacion Z y su rasgo caracteristico es la Irreverencia 😛</p>`
      );
    }
  }

  mostrarMayoriaEdad() {
    const mayoria = this.#edad;
    const mayoriaAnio = 2025 - this.#anioNacimiento;
    console.log(mayoriaAnio);
    if (mayoria >= 18 && mayoriaAnio >= 18) {
      document.writeln(
        `<p class=ps-2><b>${this.#nombre}</b> es mayor de edad</p>`
      );
    } else {
      document.writeln(
        `<p class=ps-2><b>${this.#nombre}</b> es menor de edad</p>`
      );
    }
  }

  mostrarDatos() {
    document.writeln(`<ul class=list-group>`);
    document.writeln(
      `<li class=list-group-item> <b>Nombre:</b> ${this.#nombre}</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>Edad:</b> ${this.#edad}</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>DNI:</b> ${this.#dni}</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>Sexo:</b> ${this.#sexo}</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>Peso y altura:</b> ${
        this.#pesoyAltura
      }</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>Año de nacimiento:</b> ${
        this.#anioNacimiento
      }</li>`
    );

    document.writeln(`</ul>`);
  }
}

/* crear objeto */
let numeroDocumento = Math.round(Math.random() * 50000000);

/* const cargarPersona = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(`desde cargarPersona`);
  console.log(formulario[0].value);

  nombre = formulario[0].value;
  console.log(nombre);
}; */

const cargarPersona = (e) => {
  e.preventDefault();
  console.log(`desde cargarPersona`);
  console.log(formulario[0].value);
  const nombre = formulario[0].value;
  const edad = formulario[1].value;
  console.log(edad)
  const sexo = formulario[2].value;
  const peso = formulario[3].value;
  const altura = formulario[4].value;
  const anioNaci = formulario[5].value;

  const nacho = new Persona(nombre, edad, ``, sexo, peso, anioNaci);
 console.log(nacho)
};



/* const nacho = new Persona(
  yo,
  53,
  numeroDocumento,
  `hombre`,
  `90 kg - 1,78 `,
  1971
); */

/* nacho.mostrarGeneracion();
nacho.mostrarMayoriaEdad(); */

/* console.log(Persona.nacho); */

/* CODIGO PARA USAR CON FORMULARIO */

const formulario = document.querySelector(".border");
console.log(formulario);

formulario.addEventListener("submit", cargarPersona);

/* const cargarMayoria = () => {
  const edad = formulario[1].value;
  const anios = 2025 - formulario[5].value;
  const nombre = formulario[0].value;
  if (edad >= 18 && anios >= 18) {
    alert(`${nombre} es mayor de edad`);
  } else {
    alert(`${nombre} es menor de edad`);
  }
};

const cargarGeneracion = () => {
  const genera = formulario[5].value;
  const nomb = formulario[0].value;
  console.log(genera);
  if (genera >= 1930 && genera <= 1948) {
    alert(`${nomb} pertenece a la generacion: Silent Generation 🙊`);
  } else if (genera >= 1949 && genera <= 1968) {
    alert(`${nomb} pertenece a la generacion: Baby Boom 💣`);
  } else if (genera >= 1969 && genera <= 1980) {
    alert(`${nomb} pertenece a la generacion: Generacion X ❌`);
  } else if (genera >= 1981 && genera <= 1993) {
    alert(`${nomb} pertenece a la generacion: Generacion Y 😌 `);
  } else {
    alert(`${nomb} pertenece a la generacion: Generacion Z 😛`);
  }
}; */
