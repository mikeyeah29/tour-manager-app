<?php 

    // define("BASE_URL", 'http://localhost:8888/tourmanager-app'); 
    // define("API_URL", 'http://localhost:8888/gdates/public/api'); 

    define("BASE_URL", 'http://localhost:8888/greenroom-app'); 
    define("API_URL", 'https://api.greenroomapp.co/api'); 

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Tour Manager</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css" type="text/css">
    <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
</head>
<body class="page-loading">

    <div class="overlay">
        <div class="icon-cross" id="closeMenu">x</div>
    </div>

    <div class="main-nav" id="main-nav">
        <!-- <nav>
            <ul>
                <li class="nav-item">
                    <a class="nav-link active" href="<?php// echo BASE_URL; ?>/index.php">Login</a>
                </li>
                <li>
                    <a class="nav-link active" href="<?php// echo BASE_URL; ?>/signup.php">Sign up</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php //echo BASE_URL; ?>/unavailable.php">Unavailable Dates</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php// echo BASE_URL; ?>/gigs.php">Gigs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php// echo BASE_URL; ?>/logout.php">Logout</a>
                </li>
            </ul>
        </nav> -->
    </div>