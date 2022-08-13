jQuery(document).ready(function ($) {
    let alterClass = function () {
        let ww = document.body.clientWidth;
        if (ww < 727) {
            $('.text-black').removeClass('d-flex');
            $('.text-black').addClass('for-shrink');
           
            $('.card-style-full').addClass('row justify-content-center');
            $('.shrink-remove').removeClass('container py-2');
            
            $('.card').css('height', '550px');
  
            // $('.img-fluid-div').css('padding-left', '7%');
            $('.text-body-ody').css('padding-left', '7%');
            $('.shrink-remove').css('padding-bottom','7%');
            $('.card-body-ody').css('width', 'fit-content');
            $('.card-body-ody').css('block-size', 'fit-content');
            // $('.img-fluid-div').css('padding-right', '10%');

            

        } else if (ww >= 601) {
            $('.text-black').addClass('d-flex');
            $('.text-black').removeClass('for-shrink');
            $('.img-fluid').removeClass('card-img-top w-100 d-block');
            $('.card-style-full').removeClass('row justify-content-center');
            $('.shrink-remove').addClass('container py-2');
            $('.card').css('height', '');
            $('.card-body-ody-odyard').css('width', '');
            // $('.img-fluid-div').css('padding-left', '');
            $('.text-body-ody').css('padding-left', '');
            $('.shrink-remove').css('padding-bottom', '');
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});