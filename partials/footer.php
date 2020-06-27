
    <div id="message-box-container"></div>

    <script type="text/javascript">
        var burger = $('.burger');
        var nav = $('.main-nav');
        var overlay = $('.overlay');
        burger.on('click', function(){
            if(nav.hasClass('is-open')){
                nav.removeClass('is-open');
                overlay.removeClass('is-open');
            }else{
                nav.addClass('is-open');
                overlay.addClass('is-open');
            }
        });
        overlay.on('click', function(e){
            nav.removeClass('is-open');
            overlay.removeClass('is-open');
        });
    </script>

</body>
</html>