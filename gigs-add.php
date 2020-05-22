<?php include('partials/header.php') ?>
	
	<!-- ajax hidden forms -->

	<div class="ajax-form ajax-form--hidden" id="getGigsForm" method="get" action="<?php echo API_URL; ?>/gigs"></div>

    <div class="container">

        <h1>Add Gig</h1>

        <div class="ajax-form" id="addGigForm" method="post" action="<?php echo API_URL; ?>/gigs">
            
        	<div class="form-group">
        		<label>Venue</label>
                <input type="text" class="form-control ajax-form-input" name="venue" />
        	</div>

            <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control ajax-form-input" name="date" />
            </div>

        	<div class="btn btn-primary submit-form">Submit</div>

        </div>

    </div>

    <?php include('partials/scripts.php') ?>
    
    <script type="text/javascript" src="assets/js/components/MessageBox.js"></script>
    <script type="text/javascript" src="assets/js/gigs-add.js"></script>

<?php include('partials/footer.php') ?>