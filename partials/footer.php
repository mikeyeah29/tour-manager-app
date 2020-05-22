
    <div id="message-box-container"></div>

    <script type="text/javascript">
        var burger = $('.navbar-toggler');
        var nav = $('.main-nav');
        burger.on('click', function(){
            if(nav.hasClass('is-open')){
                nav.removeClass('is-open');
            }else{
                nav.addClass('is-open');
            }
        });
    </script>

</body>
</html>