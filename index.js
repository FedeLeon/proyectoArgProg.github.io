async function requestData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

async function InsertarData() {
  const apiData = await requestData("https://randomuser.me/api/");
  console.log(apiData.results[0]);
  //FOTO
  const foto = apiData.results[0].picture.medium;
  const imgperfil = document.getElementById("imgperfil");
  imgperfil.src = foto;
  //NOMBRE
  const name = apiData.results[0].name.first;
  const nombre = document.getElementById("contactoName");
  nombre.innerHTML = `<strong>Nombre:</strong>${name}`;
  //APELLIDO
  const last = apiData.results[0].name.last;
  const apellido = document.getElementById("contactoApellido");
  apellido.innerHTML = `<strong>Apellido:</strong>${last}`;
  //DIRECCION
  const dir = apiData.results[0].location.city;
  const direccion = document.getElementById("contactoDireccion");
  direccion.innerHTML = `<strong>Direccion:</strong>${dir}`;
  //TELEFONO
  const tel = apiData.results[0].cell;
  const telefono = document.getElementById("contactoTelefono");
  telefono.innerHTML = `<strong>Telefono:</strong>${tel}`;
  //EMAIL
  const mail = apiData.results[0].email;
  const email = document.getElementById("contactoEmail");
  email.innerHTML = `<strong>Email:</strong>${mail}`;
  //IMAGEN
  const fotoContacto = apiData.results[0].picture.large;
  const imgContacto = document.getElementById("contactoImagen");
  imgContacto.src = fotoContacto
}

InsertarData();
