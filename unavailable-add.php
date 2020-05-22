<?php include('partials/header.php') ?>
	
	<!-- ajax hidden forms -->

	<div class="ajax-form ajax-form--hidden" id="getGigsForm" method="get" action="<?php echo API_URL; ?>/gigs"></div>

    <div class="container">

        <h1>Add Unavailable Date</h1>

        <div class="ajax-form" id="addUnavailabeForm" method="post" action="http://localhost:8888/gdates/public/api/unavailable">

            <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control ajax-form-input" name="date" />
            </div>

            <div class="form-group">
        		<label>Reason</label>
                <input type="text" class="form-control ajax-form-input" name="reason" />
        	</div>

        	<div class="btn btn-primary submit-form">Submit</div>

        </div>

    </div>

    <?php include('partials/scripts.php') ?>
    
    <script type="text/javascript" src="assets/js/components/MessageBox.js"></script>
    <script type="text/javascript" src="assets/js/unavailable-add.js"></script>

<?php include('partials/footer.php') ?>