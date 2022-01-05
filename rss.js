let Parser = require('rss-parser');
let parser = new Parser();

const URL1 = 'http://rss.cnn.com/rss/cnn_topstories.rss';
const URL2 = 'https://www.reddit.com/.rss';
const URL3 = 'https://feeds.simplecast.com/54nAGcIl'; // The Daily
const URL4 = 'https://feeds.simplecast.com/W1NI2v3Z'; // Solana Podcast
const URL5 = 'https://lexfridman.com/feed/podcast/'; // Lex Fridman Podcast

(async () => {

  let feed = await parser.parseURL(URL4);
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item);
    // console.log(item.title + ':' + item.enclosure.url);
  });
  console.log(feed.items.length);
})();