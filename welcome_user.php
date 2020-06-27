<?php include('partials/header.php') ?>
    
    <div class="header header--logged-in">
        <img class="logo icon-sm" src="assets/img/drum.svg" />
        <img class="burger icon-sm" src="assets/img/open-menu.svg" />
    </div>

    <div class="main-logged-in">
        <div class="container">

            <div class="d-flex justify-content-between">
                <h1>Welcome User</h1>

            </div>

        </div>
    </div>

    <div id="areyousure"></div>

    <?php include('partials/scripts.php') ?>
    
    <script type="text/javascript" src="assets/js/components/Table.js"></script>
    <script type="text/javascript" src="assets/js/components/ConfirmPopUp.js"></script>

    <script type="text/javascript" src="assets/js/welcome.js"></script>

<?php include('partials/footer.php') ?>