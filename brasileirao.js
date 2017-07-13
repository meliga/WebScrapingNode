/*
    Desafio:
    Fazer o scraping da tabela de jogos do Brasileirão 2017 direto do site da CBF
    e listando as Rodadas, Dias, Horários, quais times jogaram e quais foram os placares.
 */

var request = require('request');

function cartola(error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body', body);
}

request('http://www.cbf.com.br/competicoes/brasileiro-serie-a/tabela/2017#.WWe5jNPyuRt', cartola);