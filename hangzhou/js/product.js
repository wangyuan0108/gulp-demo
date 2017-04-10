/**
 * Created by LF on 2017/4/8.
 */
$(function () {
    todo();
});
function todo() {
    $('.nav li').click(function () {
        $(this).addClass('play').removeClass('def').siblings().addClass('def').removeClass('play').end()
               .find('div').addClass('show').removeClass('hide').end()
               .siblings().find('div').addClass('hide').removeClass('show');
    })
}