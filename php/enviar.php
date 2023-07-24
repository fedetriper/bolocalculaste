

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Llamando a los campos
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];

    $mensaje = $_POST['mensaje'];
    // Llamando al campo oculto "subject" ingresado por el usuario
    $subject = $_POST['subject'];
    // Validación del campo de correo electrónico
    if (empty($correo)) {
        // El campo de correo está vacío, mostrar un mensaje de error
        $errorCorreo = "Por favor, ingresa tu correo electrónico.";
    } elseif (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        // El formato del correo electrónico es inválido, mostrar un mensaje de error
        $errorCorreo = "El correo electrónico ingresado no es válido.";
    } elseif (!empty($subject)) {
        header('Location:/index.html');
    } else {
        // El correo electrónico es válido y el campo "subject" no está completado,
        // puedes continuar con el procesamiento y enviar el correo
        // ...

        // Por ejemplo, para enviar el correo, puedes hacer lo siguiente:
        // Datos para el correo
        $destinatario = "fedetripodicamara@gmail.com";
        $asunto = "Contacto desde Bolo Calculaste";

        $carta = "De: $nombre \n";
        $carta .= "Correo: $correo \n";

        $carta .= "Mensaje: $mensaje";

        // Enviando Mensaje
        mail($destinatario, $asunto, $carta);
        header('Location:/index.html');



        exit; // Es importante salir del script después de la redirección
    }
}
?>
