/*global $, window*/
$(function () {
    "use strict";

    // Adjust Menu and sourh Height

    var winH = $(window).height(),
        headerH = $('header').innerHeight();

    $(".sourh").height(winH - headerH - 100);

    $(".menu-1").height(winH - headerH - 38);




    // Show and Hide Menu #1

    $('.brand').click(function () {

        $('.menu-1').toggleClass('menu-valid');

        // Hide DropDown
        $(".p-aya span").parent().next('div').slideUp(600);

    });

    $('.name-sourh, .sourh').click(function () {

        $('.menu-1').removeClass('menu-valid');

    });


    // Show And Hidden DropDown & Readers

    // Show And Hidden DropDown
    $(".p-aya span").on('click', function (e) {

        $(this).parent().next('div').slideToggle(250).offset({

            left: e.pageX

        }).parents(".div-aya").siblings().find(".dropdown").slideUp(250);

        $('.readers').slideUp(250);

    });

    $('header').click(function () {

        // Hide DropDown
        $(".p-aya span").parent().next('div').slideUp(250);

    });


    // Show And Hidden The Raeders
    $('.tran').on('click', function () {

        $('.readers').slideToggle(250);

    });
    

    // Show And Hidden Tafsier
    
    // Ibn-Katheer
    $('.ibn-katheer').click(function () {
       
        $(this).parent().next().fadeIn(300).css('display', 'flex');
        $('.readers').slideUp(100);
        
    });
    
    // Al-Qortoby
    $('.al-qortoby').click(function () {
       
        $(this).parent().siblings(".tafsier-qortoby").fadeIn(300).css('display', 'flex');
        $('.readers').slideUp(100);
    });
    
    // Al-Saadi
    $('.al-saadi').click(function () {
       
        $(this).parent().siblings(".tafsier-saadi").fadeIn(300).css('display', 'flex');
        $('.readers').slideUp(100);
        
        
    });
    
    // Close Tafsier
    $('.tafsier i').click(function () {
        
        $('.tafsier').fadeOut(250);
        $('.dropdown').fadeOut(100);
        
    });


    $(function () {
        $('.brand').click(function () {
            $(".icons").toggleClass("open");
        });
        $('.name-sourh, .sourh').click(function () {
            $(".icons").removeClass("open");
        });
    });
});
