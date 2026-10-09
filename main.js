var luck = ["大凶","吉","中吉","大吉","凶"]
         var colors = ["赤","黄","青","白"];
         var btn = document.getElementById("btn");
         var output = document.getElementById("output");
         btn.onclick = function(){
            random_luck = luck[Math.floor(Math.random() * luck.length)];
            
         }