// const win_width = window.innerWidth;

// alert(win_width);

// let num1 = 5;
// let num2 = 8;

// alert(num1 + num2);

// let text1 = "リンゴ・バナナ";
// let text2 = "レモン";

// // let result = text1.substr( 0, 4);
// // alert(result + text2);

// let my_fruits = (text1 + text2).replace("バナナ","");
// alert(my_fruits);

// $(function(){
//   $('li').on('click',function(){
//     alert($(this).attr('class'));
//   });
// });

// var alertmsg = function () {
//   alert("2秒経過");
// }
// setTimeout(alertmsg, 2000);

// setTimeout(function () {
//   alert('２秒経ちました');
// }, 2000);

// let my_fruits = [
//   "リンゴ",
//   "メロン",
//   "バナナ"
// ];

// alert(my_fruits[1]);

// $(function(){
//   alert('liタグの数は' + $('li').length + '個です！');
// })

// $(function () {
//   $('p').removeClass('blue');
// });

// $(function(){
//   $('p').click(function(){
//     $(this).toggleClass('is-active')
//   });

// });

$(function () {
  $('.target').one('click', function () {
    $('.target').prepend('<p>ダミーテキストA</p>');
  });

});