<?php
include('include.php');

// We can easily unit test this endpoint code with a variable appended to the URI.
if (isset($_GET) == true) {
	if (isset($_GET['drivername']) == true) {
		$drivername = htmlentities($_GET['drivername']);
	}
	if (isset($_GET['password']) == true) {
		$password		=	htmlentities($_GET['password']);
	} else {
		// When used in conjunction with a REST call it is proper to use a POST request.
		$rest_json_object = file_get_contents("php://input");
		$rest_variables = json_decode($rest_json_object, true);
		logIt(sprintf("(line %d) \$rest_json_object %s",  __LINE__, $rest_json_object));
		//print("$rest_variables\n");

		$drivername = $rest_variables['drivername'];
		$password = $rest_variables['password'];
	}
}

//print("rest_json_object: $rest_json_object<br>");

//print("rest variables: $rest_variables[drivername]<br>");

print("drivername: $drivername<br>");

print("password: $password<br>");

$db = new SQLite3('driver.db');

if(!$db){
	$str = sprint("$db->lastErrorMsg()");
	print($str);
	$my_return = false;
	http_response_code(401);
	logIt(  sprintf(  "(line __LINE__) Error:%s found row %s", $db->lastErrorMsg()  )  );
} else {
	$query = sprintf("SELECT * from driver WHERE drivername = '%s' AND password = '%s'", $drivername, $password);
	// execute query
	$result = $db->query($query);

	// go to start of the returned array
	$result->reset();

	$row_count = 0;

	while ($returned_row = $result->fetchArray()) {
		$row_count++;
		logIt(sprintf("(line %s) found row %s",  __LINE__, $row_count));
	}

	logIt(  sprintf(  "(line %s) \$row_count: %s", __LINE__, $row_count  )  );

	if ($row_count > 0) {
		logIt(sprintf("(line %s) passed username/password check", __LINE__));
		$my_return = true;
	} else {
		logIt(sprintf("(line %s) failed username/password check", __LINE__));
		$my_return = false;
	}

	$db->close();

	// return the appropriate status code along with a true/false response
	// 401 – Unauthorized

	if ($my_return) {
		http_response_code(200);
		exit('valid');
	} else {
		http_response_code(401);
		exit('invalid');
	}
}

exit();
?>
