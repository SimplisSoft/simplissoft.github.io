<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    // Dirección de correo a la que se enviará el formulario
    $destinatario = 'carlosavelinocorrea@gmail.com';

    // Asunto del correo
    $asunto = 'Formulario de contacto';

    // Mensaje del correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Enviar el correo
    mail($destinatario, $asunto, $contenido);

    // Redirigir al usuario a una página de confirmación o gracias
    header('Location: gracias.html');
}
?>
