
// Form footer

function validarFormulario(event) {
    event.preventDefault(); 
    
    
    const form = event.target;

    if (form.checkValidity()) {
        alert("Formulario válido.");
    } else {
        alert("Por favor, complete los campos correctamente.");
    }
    
}

document.getElementById("form-id").addEventListener("submit", validarFormulario)

// Form colaborar


    function validateForm() {
        const form = document.getElementById("donationForm");
        const inputs = form.querySelectorAll("input, select");

        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute("required")) {
                if (input.value.trim() === "") {
                    isValid = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            }

            if (input.hasAttribute("pattern") && input.value !== "") {
                const pattern = new RegExp(input.getAttribute("pattern"));
                if (!pattern.test(input.value)) {
                    isValid = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            }
        });

        if (isValid) {
            // Aquí puedes agregar código para enviar el formulario
            alert("Formulario válido. Enviando...");
        } else {
            alert("Por favor, complete todos los campos correctamente.");
        }
    }






 


