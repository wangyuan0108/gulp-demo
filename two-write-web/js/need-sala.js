/**
 * Created by LF on 2017/3/23.
 */
$(function () {
    play();
});

var play = function () {
    $('.js-click').click(function () {
        $(this).addClass('js-native').removeClass('js-play').siblings().removeClass('js-native').addClass('js-play').end()
            .find('img').attr('src', 'images/icon-down01.png').end()
            .siblings().find('img').attr('src', 'images/icon-down02.png')
    })
};