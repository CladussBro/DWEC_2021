<?php
header("Content-Type: application/json; charset=UTF-8");

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'root');
define('DB_NAME', 'dwec');

$conexion = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
$conexion->set_charset("utf8");

if ($conexion->connect_error) {
    $error = "Error en la conexion : "  . $conexion->connect_error;
    echo json_encode($error);
    exit(1);
}

$name = $description = $class = "";

$error = "";

// Procesar datros cuando se realiza la petición
if (($request = file_get_contents('php://input')) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $vehiculos = json_decode($request, false);

    foreach ($vehiculos as $data) {

      // Validar id vehiculo
      $i_id = trim($data->id);
      if (empty($i_id)) {
      $error = $error . "Introduzca el identificador del vehiculo";
      } else {
          $id = $i_id;
      }

        // Validar nombre vehiculo
        $i_name = trim($data->name);
        if (empty($i_name)) {
            $error = $error . "Introduzca el nombre del vehiculo";
        } else {
            $name = $i_name;
        }

        // Validar descripcion vehiculo
        $i_description = trim($data->description);
        if (empty($i_description)) {
            $error = $error . "Introduzca la descripcion del vehiculo";
        } else {
            $description = $i_description;
        }
        
        // Validar clase vehiculo
        $i_vehicle_class = trim($data->vehicle_class);
        if (empty($i_vehicle_class)) {
            $error = $error . "Introduzca la clase del vehiculo";
        } else {
            $vehicle_class = $i_vehicle_class;
        }



        // Si no hay errores, procedemos a insertar en la BD
        if (empty($error)) {
            // Preparar la sentencia
            $sql = "REPLACE INTO `vehiculos` (`id`,`name`, `description`,`class`) VALUES (?,?,?,?)";

            if ($stmt = $conexion->prepare($sql)) {
                // Enlaza las variables a los parámetros
                $stmt->bind_param(
                    'ssss',
                    $param_id,
                    $param_name,
                    $param_description,
                    $param_vehicle_class,
                  
                );

                // Establecer los parámetros
                $param_id = $id;
                $param_name = $name;
                $param_description = $description;
                $param_vehicle_class = $vehicle_class;
                


                // Ejecutar la sentencia
                if (!$stmt->execute()) {
                    // Ha habido algún error. Devolver json con error de insercion en BD
                    $error = "Error al insertar en la BD";
                    echo json_encode($error);
                    exit(1);
                }
            } else {
                $error = "Error al preparar la sentencia";
                echo json_encode($error);
                exit(1);
            }
            // Cerramos la sentencia y la conexion
            mysqli_stmt_close($stmt);
        } else {
            echo json_encode($error);
            exit(1);
        }
    }

    // Se han ejecutado todas las inserciones correctamente

    // Se ha creado corretamente, devolver json con "ok"
    $sql = "SELECT `id`, `class`, `description` FROM `vehiculos`";

    $resultado = $conexion->query($sql);

    $salida = array();

    if ($resultado && $resultado->num_rows > 0) {
        $salida =  $resultado->fetch_all(MYSQLI_ASSOC);
    }

    echo json_encode($salida);
    exit(1);
} else {
    $error = "No es un metodo post";
    echo json_encode($error);
}
