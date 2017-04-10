/**
 * Created by LF on 2017/4/8.
 */
$(function () {
    click();
});
function click() {
    $('.click li').click(function (event) {
        $(this).children('ul').toggle('fast').end()
                .children('div').find('span').toggleClass('down');
        event.stopPropagation();
    });
    $('.click li li').click(function () {
        $(this).find('span').toggleClass('sup');
    })
}
