
document.addEventListener("DOMContentLoaded", function() {
    const errorElement = document.getElementById('error-message');
    const form = document.getElementById("form");
    const miSelect = document.getElementById("country");
    const miInput = document.getElementById("Nacionalidad");
    const {value} = document.getElementById("id");
    const userId = value;
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const dataUser = {};
        const formData = new FormData(form);
        for (const [clave, valor] of formData.entries()) {
            dataUser[clave] = valor;
        }
        dataUser.id = dataUser.id.trim();
        delete dataUser.Nacionalidad;

        axios.put(`http://localhost:8000/api/users/${userId.trim()}`, dataUser)
            .then(response => {
            window.location.href = 'http://localhost:3000/';
            console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
                console.error(error.response.data.message.id);
                error.response.data.hasOwnProperty('message')
                if(error.response.data.message){
                    errorElement.innerHTML = error.response.data.message.id
                    errorElement.style.display = 'block';
                    setTimeout(() => {
                        errorElement.style.display = 'none';
                    }, 2000);
                }
  
            });
                    
    });


    miSelect.addEventListener("change", (event) => {
        event.preventDefault();
        const selectedOption = miSelect.options[miSelect.selectedIndex];
        const selectedId = selectedOption.value;
        const nacionalidad = selectedOption.id;
        const selectedPais = selectedOption.dataset.country_name; 
        miInput.value = nacionalidad; 
    });
});





