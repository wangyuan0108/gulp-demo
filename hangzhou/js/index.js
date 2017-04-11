/**
 * Created by LF on 2017/4/7.
 */
$(function () {
    slide();
    left();
});
var slide=function (){
    $(".slideBox").slide({
        mainCell:".bd ul",
        autoPlay:true
    });
};
var left=function () {
    $(".picScroll-left").slide({
        titCell:".hd ul",
        mainCell:".bd ul",
        autoPage:true,
        effect:"left",
        autoPlay:true,
        vis:4,
        trigger:"click"
    });
};
