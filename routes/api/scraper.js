const router = require('express').Router();
const cheerio = require('cheerio');
const request = require('request');

router.get('/amiibos', (req, res) => {
  
  function getAmiibos() {
    return new Promise((resolve, reject) => {

      request('https://www.nintendo.com/amiibo/line-up', function(error, response, html) {

        let $ = cheerio.load(html);

        let amiibos = [];

        $('div.b3.amiibo-name').each(function(i, element) {
          let nameObj = { 
            name: element.children[0].data
          }
          amiibos.push(nameObj);
        });

        $('.boxart').each(function(i, element) {
          let p = element.children[0].next.attribs.src;
          Object.assign(amiibos[i], {img: 'https:' + p});
        });

        console.log(amiibos);

        resolve(amiibos);

      });
    });
  }

  module.exports = {
    getAmiibos
  }

});

module.exports = router;

