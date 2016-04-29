<?php
/*
 * include.php contains some functions common the the endpoints
 * On server, PHP Version 5.5.22
 */
// hide obnoxious error messages from user
//error_reporting(E_ERROR);

// We can easily unit test this endpoint code with a variable appended to the URI.
if (isset($_GET['drivername']) == true) {
	$drivername =		$_GET['drivername'];
	$password =			$_GET['password'];
	if (isset($_GET['ability']) == true) {
		$ability = $_GET['ability'];
		$firstname = $_GET['firstname'];
		$lastname = $_GET['lastname'];
		$email = $_GET['email'];
		$address = $_GET['address'];
		$city = $_GET['city'];
		$state = $_GET['state'];
		$zip = $_GET['zip'];
		$phone = $_GET['phone'];
	}
} else {
	// When used in conjunction with a REST call it is proper to use a POST request.
	/*
	$rest_json_object = file_get_contents("php://input");

	$rest_variables = json_decode($rest_json_object);
	*/
	if (isset($_POST['drivername']) == true) {
		$drivername = $_POST['drivername'];
		$password = $_POST['password'];
		$ability = $_POST['ability'];
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$email = $_POST['email'];
		$address = $_POST['address'];
		$city = $_POST['city'];
		$state = $_POST['state'];
		$zip = $_POST['zip'];
		$phone = $_POST['phone'];
	}
}


/*
 * logIt($msg) sends $msg to the console.log
 */
function logIt($msg){
	print("<script>console.log('$msg')</script>\n");
}
?>