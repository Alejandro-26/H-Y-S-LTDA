<?php

$user = "root";
$pass = "";
$server = "localhost";
$bd = "proyecto";


$mysqli = new mysqli($server, $user, $pass, $bd);

if($mysqli -> connect_error){
    echo"No establece una conexion segura !!";
    exit;
}else
{
    echo"Conexion Exitosa !!";

    $nombre = $_POST["nombre"];
    $identificacion = $_POST["identificacion"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];

    $sql = "insert into cliente values('".$nombre."', '".$identificacion."', '".$correo."', '".$telefono."')";
    $mysqli -> query($sql);
    echo"Se registraron los datos correctamente.";
}

$mysqli -> close();

?>
