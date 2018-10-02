<?php
  $dbHost = getSafeEnvVar('DB_HOST');
  $dbName = getSafeEnvVar('DB_NAME');
  $dbUsername = getSafeEnvVar('DB_USER');
  $dbPassword = getSafeEnvVar('DB_PASSWORD');
  $studentsTable = getSafeEnvVar('STUDENTS_TABLE');

  // create database connection
  $db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

  // check connection
  if ($db->connect_error) {
    // TODO: reduce exposed raw error values
    die("Connection failed: " . $db->connect_error);

  } else {
    // fetch data
    $query_string = "SELECT * from students";
    $result = $db->query($query_string);

    // format response in json array
    $row_index = -1;
    $last_index = $result->num_rows - 1;
    $json = '[';
    while ($row = $result->fetch_assoc()) {
      $row_index++;
      $json .= '{' .
        '"firstName": "' . utf8_encode($row['first_name']) . '",' .
        '"lastName": "' . utf8_encode($row['last_name']) . '",' .
        '"phone": "' . $row['phone'] . '",' .
        '"email": "' . $row['email'] . '",' .
        '"country": "' . $row['country'] . '"';
      $json .= ($row_index < $last_index) ? '},' : '}';
    }
    $json .= ']';

    echo $json;
  }


  // methods definitions
  function getSafeEnvVar($var_name) {
    return getenv($var_name) ? getenv($var_name) : 'undefined';
  }
?>
