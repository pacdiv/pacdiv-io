Serverless Snake Game
===================


This project powers [Pacdiv's snake game](https://github.com/pacdiv/snake-game) project with Serverless Framework ! :fire:

[Play now](https://www.pacdiv.io/games/snake) and put your name at the top of the scoreboard ! :sunglasses: 

----------


How to install
-------------

First, you need to get the project :
```
$ npm install -g serverless
$ git clone git@github.com:pacdiv/pacdiv-io.git
$ cd snake && npm install
```

Then, get your [AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/) and create your *config.js* file based on *config.js.example*.

Finally, run the following command :
```
$ npm start dev
```

The server should start and you should get the following result :
> $ serverless offline
> Serverless: Starting Offline: dev/eu-central-1.
> 
> Serverless: Routes for index:
> Serverless: GET /games/snake
> 
> Serverless: Routes for postScore:
> Serverless: POST /games/snake/score
> 
> Serverless: Routes for getRank:
> Serverless: GET /games/snake/rank/{score}
> 
> Serverless: Offline listening on http://localhost:3000


----------


License
-------------------

MIT, more information [here](https://github.com/pacdiv/pacdiv-io/blob/master/snake/LICENSE.md).
