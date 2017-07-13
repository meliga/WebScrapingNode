var request = require('request');
var cheerio = require('cheerio');

function requisicao(error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('header', response && response.headers)
    //console.log('header', response && response.headers.date)
    //console.log('body:', body); // Print the HTML for the Google homepage.
    var $ = cheerio.load(body);
    console.log($('div.wrapper > p').text());
}

request('http://diedromeliga.com.br/', requisicao);
