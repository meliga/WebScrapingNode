/*
    Desafio:
    Fazer o scraping da tabela de jogos do Brasileirão 2017 direto do site da CBF
    e listando as Rodadas, Dias, Horários, quais times jogaram e quais foram os placares.
 */

var request = require('request');
var cheerio = require('cheerio');

function cartola(error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    //console.log('body', body);

    var $ = cheerio.load(body);
    var rodadas   = $('#competition-rounds').find('.tabela-jogos').eq(0).attr('class').split(" ");
    var tabela    = "." + rodadas[2];

    var count_rounds = $('#competition-rounds').find('.tabela-jogos').length
    var count_rounds_day = $(tabela).children('div.headline').length;
    var count_rounds_day_game = $(tabela).children('div.headline').siblings('.row').length();


    var rodada    = $(tabela).children('h3.stripe').text();
    var data      = $(tabela).children('div.headline').eq(0).text();
    var hora      = $(tabela).find('div.full-game-time').eq(1).text();
    var mandante  = $(tabela).find('div.game-team-1').eq(1).text();
    var visitante = $(tabela).find('div.game-team-2').eq(1).text();
    var placar    = $(tabela).find('div.game-score').eq(1).text().trim().split("\n");

    var gols_mandante  = placar[0].trim();
    var gols_visitante = placar[2].trim();

    var local = $(tabela).find('div.full-game-location span').eq(1).text().trim().split("\n");

    var itens = 'Rodada: ' + rodada + '\n'
                + 'Data: ' + data.trim() + '\n'
                + 'Hora: ' + hora.trim() + '\n'
                + 'Jogo: ' + mandante.trim() + ' [' + gols_mandante + ' X ' + gols_visitante + '] ' + visitante.trim() + '\n'
                + 'Local: ' + local[3].trim();
    console.log(count_rounds_day_game);

}

request('http://www.cbf.com.br/competicoes/brasileiro-serie-a/tabela/2017#.WWe5jNPyuRt', cartola);