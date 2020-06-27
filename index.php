<?php 

    include('partials/header.php')

?>

    <div class="header">
        <img class="logo icon-sm" src="assets/img/drum.svg" />
        <img class="burger icon-sm" src="assets/img/open-menu.svg" />
    </div>

    <div class="hero">
        <h1 class="logo">GreenRoom</h1>
        <p>Login</p>
    </div>

    <div class="container">

        <div class="mt-4 gr-form gr-form--pannel squeeze" id="loginForm" method="post" action="<?php echo API_URL ?>/auth/login">

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="gr-form__input ajax-form-input" name="email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="gr-form__input ajax-form-input" name="password" />
            </div>

            <div class="gr-btn gr-btn--cta text-center submit-form w-100">Login</div>

        </div>

    </div>

    <?php include('partials/scripts.php') ?>
    
    <script type="text/javascript" src="assets/js/login.js"></script>

<?php include('partials/footer.php') ?>