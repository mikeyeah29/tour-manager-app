<?php 

    include('partials/header.php')

?>

    <div class="container">

        <h1>Tour Manager</h1>
        <p>
            An app that will make everything better!
        </p>

        <div class="form" id="loginForm" method="post" action="http://localhost:8888/gdates/public/api/auth/login">

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control ajax-form-input" name="email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control ajax-form-input" name="password" />
            </div>

            <div class="btn btn-primary submit-form">Login</div>

        </div>

    </div>

    <?php include('partials/scripts.php') ?>
    
    <script type="text/javascript" src="assets/js/login.js"></script>

<?php include('partials/footer.php') ?>