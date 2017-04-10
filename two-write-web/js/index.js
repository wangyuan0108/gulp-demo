/**
 * Created by LF on 2017/3/16.
 */
$(function () {
    play();
    focus();
});
function play() {
    $('.play').click(function () {
        var val = $(this).find('a').text();
        $(this).find('a').addClass('js-active').end()
            .siblings().find('a').removeClass('js-active');
        $('.form_input').attr({placeholder: '请输入' + val + '名称'});
    })
}
function  focus() {
    $('.g-focus').slide({
        mainCell:'.g-focus-pic',
        titCell:'.g-focus-num li',
        effect:'fade',
        autoPlay:true
    });
}