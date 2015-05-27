var Bot = require('bot');
var PF = require('pathfinding');
var bot = new Bot('5chdwzrj', 'arena', 'http://52.8.116.125:9000'); //Put your bot's code here and change training to Arena when you want to fight others.
//var bot = new Bot('pbelz3dr', 'arena', 'http://vindinium.org'); //Put your bot's code here and change training to Arena when you want to fight others.
var goDir;
var Promise = require('bluebird');
Bot.prototype.botBrain = function() {
    return new Promise(function(resolve, reject) {
        _this = bot;
        /* Write your bot below Here */
        /* Set `bot.goDir` in the direction you want to go */
        // Bots
        var bots = [];
        if(bot.yourBot.id != 1 && !bot.data.game.heroes[0].crashed) bots.push(bot.bot1);
        if(bot.yourBot.id != 2 && !bot.data.game.heroes[1].crashed) bots.push(bot.bot2);
        if(bot.yourBot.id != 3 && !bot.data.game.heroes[2].crashed) bots.push(bot.bot3);
        if(bot.yourBot.id != 4 && !bot.data.game.heroes[3].crashed) bots.push(bot.bot4);
        var enemyMines = [];
        if(bot.yourBot.id != 1) enemyMines = enemyMines.concat(bot.bot1mines);
        if(bot.yourBot.id != 2) enemyMines = enemyMines.concat(bot.bot2mines);
        if(bot.yourBot.id != 3) enemyMines = enemyMines.concat(bot.bot3mines);
        if(bot.yourBot.id != 4) enemyMines = enemyMines.concat(bot.bot4mines);
        // myPos - My Position. States my X & Y Coordinates.
        var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y];
        // var closestMine- The closest mine that is free to myPos.
        var closestMine = bot.freeMines[0];
        // closestTavern - Closest Tavern to myPos
        var closestTavern = bot.taverns[0];
        // Directions on compass used to make bot nagivate.
        var dirs = ["north", "east", "south", "west"];
        //free mines -  Makes my bot go to the closest Free Mine (not taken by an enemy) and capture it. Tells me if closest mine is farther away, just free mine.
        for(i = 0; i < bot.freeMines.length; i++) {
            if(bot.findDistance(myPos, closestMine) > bot.findDistance(myPos, bot.freeMines[i])) {
                closestMine = bot.freeMines[i];
            }
        }
        var closestEnemyMine = enemyMines[0];
        
        // If bot's health is above 25, then go to the closestMine. Otherwise, go to a tavern.
        if(bot.yourBot.life > 25) {
            bot.goDir = bot.findPath(myPos, closestMine);
        } else if(bot.yourBot.life < 25) {
            for(i = 0; i < bot.taverns.length; i++) {
                if(bot.findDistance(closestTavern, myPos) > bot.findDistance(myPos, bot.taverns[i])) {
                    closestTavern = bot.taverns[i];
                }
            }
        }
      
        //Go To Tavern -  This was some alternate code to the Tavern code above. 
        //      bot.goDir = bot.findPath(myPos, closestTavern);
        //  }
        //   if((bot.findDistance(myPos, closestTavern) === 3) && (bot.yourBot.life < 75)) {
        //      bot.goDir = bot.findPath(myPos, closestTavern)
        //     console.log("Going to Tavern")
        //  }
        
        // Make bot go to closestMine or enemyMines if goDir(direction) is equal to none. Only is executed when the position is within a raduius of 8 and the life of my bot is greater than 25.
        if(bot.goDir == "none")
            for(i = 0; i < bots.length; i++) {
                if(bot.findDistance(myPos, [bots[i].pos.x, bots[i].pos.y]) < 15) {
                    bot.goDir = bot.findPath(myPos, [bots[i].pos.x, bots[i].pos.y]);
                } else(bot.findDistance(myPos, closestMine) > bot.findDistance(myPos, enemyMines[i]));
                closestMine = enemyMines[i];
            }
            //PVP - This makes my bot fight other bots that are closeby if they are in a radius of 10 and THEIR health is less than 25. Otherwise, the code is not executed.
        for(i = 0; i < bots.length; i++) {
            if(bot.findDistance(myPos, [bots[i].pos.x, bots[i].pos.y]) < 10 && bots[i].life < 25) {
                bot.goDir = bot.findPath(myPos, [bots[i].pos.x, bots[i].pos.y]);
            }
            console.log("PVP");
        }
        /* DON'T REMOVE ANTYTHING BELOW THIS LINE */
        resolve();
    });
}
bot.runGame();