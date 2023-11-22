const ciudadesPeru = {
    Lima: ["Lima", "Callao", "San Isidro"],
    Arequipa: ["Arequipa", "Cayma", "Miraflores"],
    Trujillo: ["Trujillo", "La Esperanza", "Huanchaco"],
    Cusco: ["Cusco", "San Jerónimo", "Wanchaq"]
  };
  
  // Provincias y distritos de cada departamento
  const provinciasYDistritosPeru = {
    Lima: {
      Lima: ["Lima", "Chorrillos", "San Borja"],
      Barranca: ["Barranca", "Paramonga", "Pativilca"],
      Huaral: ["Huaral", "Chancay", "Aucallama"]
    },
    Arequipa: {
      Arequipa: ["Arequipa", "Yanahuara", "Socabaya"],
      Camaná: ["Camaná", "José María Quimper", "Mariano Nicolás Valcárcel"],
      Islay: ["Mollendo", "Cocachacra", "Dean Valdivia"]
    },
    Trujillo: {
      Trujillo: ["Trujillo", "La Esperanza", "Florencia de Mora"],
      Ascope: ["Ascope", "Chicama", "Magdalena de Cao"],
      Bolívar: ["Bolívar", "Otuzco", "Agallpampa"]
    },
    Cusco: {
      Cusco: ["Cusco", "San Jerónimo", "Wanchaq", "San Sebastian", "Poroy"],
      Acomayo: ["Acomayo", "Acopia", "Mosoc Llacta"],
      Anta: ["Anta", "Mollepata", "Huarocondo"],
      Paucartambo: ["Huancarani", "Collquepata", "Paucartambo"],
      Urubamba: ["Chinchero", "Urubamba", "Huayllbamba", "Moray"]
    }
  };

  function cargarCiudadesProvinciasYDistritos() {
    const departamentoSelector = document.getElementById("departamento")
    const provinciaSelector = document.getElementById("provincia")
    const distritoSelector = document.getElementById("distrito")

    departamentoSelector.innerHTML = "<option value=''>Selecciona una departamento</option>"
    provinciaSelector.innerHTML = "<option value=''>Selecciona una provincia</option>"
    distritoSelector.innerHTML = "<option value=''>Selecciona un distrito</option>"

    for (const departamento in ciudadesPeru) {
      const option = document.createElement("option");
      option.value = departamento;
      option.text = departamento;
      departamentoSelector.add(option);
    }

    departamentoSelector.addEventListener("change", function () {
      const seleccionDepartamento = departamentoSelector.value;
  
      provinciaSelector.innerHTML = "<option value=''>Selecciona una provincia</option>"
      if (seleccionDepartamento && provinciasYDistritosPeru[seleccionDepartamento]) {
        for (const provincia in provinciasYDistritosPeru[seleccionDepartamento]) {
          const option = document.createElement("option")
          option.value = provincia
          option.text = provincia
          provinciaSelector.add(option)
        }
      }
    })
  
    // Evento al cambiar la provincia
    provinciaSelector.addEventListener("change", function () {
      const seleccionDepartamento = departamentoSelector.value;
      const seleccionProvincia = provinciaSelector.value;
  
      // Llenar el selector de distritos
      distritoSelector.innerHTML = "<option value=''>Selecciona un distrito</option>";
      if (
        seleccionDepartamento &&
        seleccionProvincia &&
        provinciasYDistritosPeru[seleccionDepartamento] &&
        provinciasYDistritosPeru[seleccionDepartamento][seleccionProvincia]
      ) {
        provinciasYDistritosPeru[seleccionDepartamento][seleccionProvincia].forEach(function (
          distrito
        ) {
          const option = document.createElement("option")
          option.value = distrito
          option.text = distrito
          distritoSelector.add(option)
        })
      }
    })
  }
  
  cargarCiudadesProvinciasYDistritos();