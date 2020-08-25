module.export = {
    name: 'Embed' ,
    description: "Embeds for the server",
    execute(message, args) {

        const embed = {
            "title": "~~INFO~~",
            "url": "store.stacknetwork.net",
            "color": ff00ff,
            "footer": {
              "icon_url": "https://imgur.com/a/FrNooWN",
              "text": "Join our server now! play.stacknetwork.net"
            },
            "thumbnail": {
              "url": "https://imgur.com/a/FrNooWN"
            },
            "image": {
              "url": "https://imgur.com/a/bVdS8k8"
            },
            "fields": [
              {
                "name": "Ranks",
                "value": "StackNetwork offers a selection of ranks to buy in order to enhance your experience in our server. We also offer crates and etc that will give you more advantage and perks"
              },
              {
                "name": "Prizes",
                "value": "We also offer our players rewards if u achieve the goal in being on one of the top 5 islands"
              },
              {
                "name": "Rewards",
                "value": "We offer our players rewards via paypal and monthly vouchers which can be used in our store at store.stacknetwork.net"
              },
              {
                "name": "Gamemodes",
                "value": "Currently we only have one gamemode called Skyblock this will soon multiply to more gamemodes that you can play for you to enjoy!"
              },
            ]
          };
          channel.send("this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```", { embed });
    
}}