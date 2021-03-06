<?php include('partials/header.php') ?>
    
    <div class="header header--logged-in">
        <img class="logo icon-sm" src="assets/img/drum.svg" />
        <img class="burger icon-sm" src="assets/img/open-menu.svg" />
    </div>

    <div class="main-logged-in">
        <div class="container">

            <div class="d-flex justify-content-between">
                <h1>Gigs</h1>
                <a href="<?php echo BASE_URL; ?>/gigs-add.php" class="gr-btn gr-btn--cta">Add Gig</a>
            </div>
            
            <div class="gigs">
                
            </div>

        </div>
    </div>

    <div id="areyousure"></div>

    <?php include('partials/scripts.php') ?>
    
    <script type="text/javascript" src="assets/js/components/Table.js"></script>
    <script type="text/javascript" src="assets/js/components/ConfirmPopUp.js"></script>
    <script type="text/javascript" src="assets/js/models/Gig.js"></script>
    <script type="text/javascript" src="assets/js/gigs.js"></script>

<?php include('partials/footer.php') ?>