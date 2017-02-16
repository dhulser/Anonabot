/**
 * A Bot for Slack!
 */

/**
 * Define a function for initiating a conversation on installation
 * With custom integrations, we don't have a way to find out who installed us, so we can't message them :(
 */

function onInstallation(bot, installer) {
    if (installer) {
        bot.startPrivateConversation({user: installer}, function (err, convo) {
            if (err) {
                console.log(err);
            } else {
                convo.say('I am a bot that has just joined your team');
                convo.say('You must now /invite me to a channel so that I can be of use!');
            }
        });
    }
}


/**
 * Configure the persistence options
 */

var config = {};
if (process.env.MONGOLAB_URI) {
    var BotkitStorage = require('botkit-storage-mongo');
    config = {
        storage: BotkitStorage({mongoUri: process.env.MONGOLAB_URI}),
    };
} else {
    config = {
        json_file_store: ((process.env.TOKEN)?'./db_slack_bot_ci/':'./db_slack_bot_a/'), //use a different name if an app or CI
    };
}

/**
 * Are being run as an app or a custom integration? The initialization will differ, depending
 */

if (process.env.TOKEN || process.env.SLACK_TOKEN) {
    //Treat this as a custom integration
    var customIntegration = require('./lib/custom_integrations');
    var token = (process.env.TOKEN) ? process.env.TOKEN : process.env.SLACK_TOKEN;
    var controller = customIntegration.configure(token, config, onInstallation);
} else if (process.env.CLIENT_ID && process.env.CLIENT_SECRET && process.env.PORT) {
    //Treat this as an app
    var app = require('./lib/apps');
    var controller = app.configure(process.env.PORT, process.env.CLIENT_ID, process.env.CLIENT_SECRET, config, onInstallation);
} else {
    console.log('Error: If this is a custom integration, please specify TOKEN in the environment. If this is an app, please specify CLIENTID, CLIENTSECRET, and PORT in the environment');
    process.exit(1);
}


/**
 * A demonstration for how to handle websocket events. In this case, just log when we have and have not
 * been disconnected from the websocket. In the future, it would be super awesome to be able to specify
 * a reconnect policy, and do reconnections automatically. In the meantime, we aren't going to attempt reconnects,
 * WHICH IS A B0RKED WAY TO HANDLE BEING DISCONNECTED. So we need to fix this.
 *
 * TODO: fixed b0rked reconnect behavior
 */
// Handle events related to the websocket connection to Slack
controller.on('rtm_open', function (bot) {
    console.log('** The RTM api just connected!');
});

controller.on('rtm_close', function (bot) {
    console.log('** The RTM api just closed');
    // you may want to attempt to re-open
});





/**
 * Core bot logic goes here!
 */
// BEGIN EDITING HERE!

var request = require('request');

request.post(         //Find the time the last message was posted, set to lastmessagedelay
    'https://slack.com/api/channels.list?exclude_archived=true&pretty=1&token=' + process.env.TOKEN,
        function (error, response, body) {
    if (error)
        console.log("Error:", error)
    else
        var slackresponse = JSON.parse(response.body)
        var numberofchannels = slackresponse.channels.length
        
    console.log('-----number of channels------' , numberofchannels)
        if (numberofchannels >= 1) { 
            var channel1Name = slackresponse.channels[0].name
            var channel1ID = slackresponse.channels[0].id
            console.log('-----Channel 1 Name------' , channel1Name)
            console.log('-----Channel 1 ID------' , channel1ID)
            
         if (numberofchannels >= 2){
            var channel2Name = slackresponse.channels[1].name
            var channel2ID = slackresponse.channels[1].id
            console.log('-----Channel 2 Name------' , channel2Name)
            console.log('-----Channel 2 ID------' , channel2ID)
                                
         if (numberofchannels >= 3) {
            var channel3Name = slackresponse.channels[2].name
            var channel3ID = slackresponse.channels[2].id
            console.log('-----Channel 3 Name------' , channel3Name)
            console.log('-----Channel 3 ID------' , channel3ID)
                                    
        if (numberofchannels >= 4) {
            var channel4Name = slackresponse.channels[3].name
            var channel4ID = slackresponse.channels[3].id
            console.log('-----Channel 4 Name------' , channel4Name)
            console.log('-----Channel 4 ID------' , channel4ID)
                                    
        if (numberofchannels >= 5) {
            var channel5Name = slackresponse.channels[4].name
            var channel5ID = slackresponse.channels[4].id
            console.log('-----Channel 5 Name------' , channel5Name)
            console.log('-----Channel 5 ID------' , channel5ID)
                                    
         if (numberofchannels >= 6) {
            var channel6Name = slackresponse.channels[5].name
            var channel6ID = slackresponse.channels[5].id
            console.log('-----Channel 6 Name------' , channel5Name)
            console.log('-----Channel 6 ID------' , channel5ID)
            


controller.on('bot_channel_join', function (bot, message) {
    bot.reply(message, "I'm here!")
})

const botAPI = controller.spawn({
  token: token,
  retry: 'Infinity'
})

controller.hears(["hello"], 'direct_message', function(bot, message){
    var yourmessage = message.text
    console.log('-------Your Message------', yourmessage)
    bot.reply(message, 'Which channel do you want to post to? Channels:', Channel1Name, Channel2Name)    

    botAPI.startRTM((err, bot, payload) => {  
    bot.say({text: yourmessage, channel:"C033UHJ0S"}) 
                                            });
    
});
      }}}}}
        }});

