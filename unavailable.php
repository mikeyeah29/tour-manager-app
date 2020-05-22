<?php include('partials/header.php') ?>

    <div class="container">

        <div class="d-flex justify-content-between">
            <h1>Unavailable Dates</h1>
            <a href="<?php echo BASE_URL; ?>/unavailable-add.php" class="btn btn-primary">Add Date</a>
        </div>
        
        <div class="unavailableDates">
            
        </div>

    </div>

    <div id="areyousure"></div>

    <?php include('partials/scripts.php') ?>
    
    <script type="text/javascript" src="assets/js/components/Table.js"></script>
    <script type="text/javascript" src="assets/js/components/ConfirmPopUp.js"></script>
    <script type="text/javascript" src="assets/js/models/Unavailable.js"></script>
    <script type="text/javascript" src="assets/js/unavailable.js"></script>

<?php include('partials/footer.php') ?>