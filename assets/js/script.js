$(document).ready(function() {
    $('#example').DataTable();
    });

$(document).ready(function() {
        $("#btnEnviar").click(function() {
            let correo = $('#correoUsuario').val();
            let nombre = $('#nombreUsuario').val();
            let mensaje = $('#comentario').val();
    
            if (correo === '' || nombre === '' || mensaje === '') {
                alert("Por favor complete el formulario");
                $('#errorBtn').removeClass('inv').addClass('errorGeneral');
            } else {
                alert("El formulario ha sido enviado correctamente");
                $('#errorBtn').removeClass('errorGeneral').addClass('success');
            }
    
            if (correo === '') {
                alert("Por favor ingrese su correo");
                $('#errorEmail').removeClass('inv').addClass('errorGeneral');
            } else {
                $('#errorEmail').removeClass('errorGeneral').addClass('success');
            }
    
            if (nombre === '') {
                alert("Por favor ingrese su nombre");
                $('#errorNombre').removeClass('inv').addClass('errorGeneral');
            } else {
                $('#errorNombre').removeClass('errorGeneral').addClass('success');
            }
    
            if (mensaje === '') {
                alert("Por favor ingrese el comentario");
                $('#errorComentario').removeClass('inv').addClass('errorGeneral');
            }
        });
    });