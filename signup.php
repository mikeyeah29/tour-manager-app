<?php 

    include('partials/header.php')

?>

    <div class="hero">
        <h1 class="logo">GreenRoom</h1>
        <p>Signup</p>
    </div>

    <div class="container">

        <div class="mt-4 gr-form gr-form--pannel squeeze" id="loginForm" method="post" action="<?php echo API_URL ?>/auth/signup">

            <div class="form-group">
                <label>Name</label>
                <input type="text" class="gr-form__input ajax-form-input" name="name" />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="gr-form__input ajax-form-input" name="email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="gr-form__input ajax-form-input" name="password" />
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="gr-form__input ajax-form-input" name="password_confirmation" />
            </div>

            <div class="gr-btn gr-btn--cta text-center submit-form w-100">Sign up</div>

        </div>

    </div>

    <?php include('partials/scripts.php') ?>
    
    <script type="text/javascript" src="assets/js/signup.js"></script>

<?php include('partials/footer.php') ?>