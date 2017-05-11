var word = `Ground Control to Major Tom
Ground Control to Major Tom
Take your protein pills and put your helmet on
Ground Control to Major Tom (ten, nine, eight, seven, six)
Commencing countdown, engines on (five, four, three)
Check ignition and may God's love be with you (two, one, liftoff)`;

function cleanText(word) {
  return word.toLowerCase().replace("\'s", '').match(/[^_\W]+/g);
}
 

function wordCount(arr) {
  return arr.length;
}

function uniqueWordCount(arr) {
  var mySet = new Set(arr);
  return mySet.size;
}

function avgWordLength(arr) {
  return arr.join('').length / arr.length;
}

$('.js-text-form').submit(function(e) {
    //run wordCount on e.currentTarget and place in dd
        //under Word Count 
    e.preventDefault();
    $('.hidden').toggle();
    // $('.js-word-count').empty();
    var input = $('#user-text').val();
    $('.text-report dd').empty();
    $('dd.js-word-count').append(wordCount(cleanText(input)));
    $('dd.js-unique-word-count').append(uniqueWordCount(cleanText(input)));
    $('dd.js-average-word-length').append(avgWordLength(cleanText(input)));
})