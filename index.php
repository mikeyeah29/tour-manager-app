<?php 

    include('partials/header.php')

?>

    <div class="container">

        <h1>Tour Manager</h1>
        <p>
            An app that will make everything better!
        </p>

        <div class="form" id="loginForm" method="post" action="<?php echo API_URL ?>/auth/login">

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

   <script type="text/javascript">
       

    // console.log('do it');

    //    $.ajax({
    //         url: 'http://gdates.rwdstaging.co.uk/api/yeah',
    //         method: 'get',
    //         success: function(data){
    //             console.log(data);
    //         },
    //         error: function(a,b,c){
    //             console.log(a,b,c);
    //         }
    //    })

   </script>

<?php include('partials/footer.php') ?>