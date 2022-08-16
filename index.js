const TelegramBot = require('node-telegram-bot-api');
const token = '5462081666:AAHUObd6E7UmmyCVUpznYJdKGeIMb7rM5zk';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Fuck Off dude");
    }
    
    });

    bot.onText(/\/start/, (msg) => {

        fetch('https://www.reddit.com/r/slavelabour/new.json')
        .then(res => res.json())
        .then(body => {
            for (let index = 0; index < body.data.children.length; index++) {
                if(body.data.children[index].data.link_flair_css_class === "task"){
                    // bot.sendMessage(msg.chat.id, body.data.children[index].data.title );
                    bot.sendMessage(msg.chat.id, body.data.children[index].data.title + '\n \n \n' + 'u/' + body.data.children[index].data.author + ' -> ' + 'r/' + body.data.children[index].data.subreddit + '\n \n \n' + body.data.children[index].data.selftext + '\n \n \n' + body.data.children[index].data.url);
                    break;
                    
                }
    
            }
        })
        .catch(function(err) {
            console.log(err);   
        });
        
        bot.launch();

        });
