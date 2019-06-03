const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log("Bot started.")
    bot.user.setActivity("LavaCraft.ru", {type: "PLAYING"})
})


bot.login("NDg5MTA3NTE1ODU5MDA5NTU2.XPTdMA.uvnvOrrEKouJT9qbBGVJYpMAyVg");

bot.on('message',(message)=>{
    if(message.content=="!info"){ 
        message.channel.send("``Уникальность серверов!`` \nВсе нижеперечисленные сервера имеют несколько авторских модов которые объедены в один и называются LavaMod.\n1)Новые ресурсы, на которых основана большая часть крафтов из LavaMod.\n2)Новые уникальные блоки и механизмы.\n3)Множество новых видов брони и аксессуаров, дающих колоссальную защиту и подстроенных под разные этапы развития игрока.\n4)Систему улучшения всей брони из LavaMod, позволяющую увеличивать защиту в несколько раз.\n5)Множество нового оружия, как ближнего боя, так и дальнобойного.\n6)Систему улучшения всего оружия из LavaMod, на порядок увеличивающую урон.\n7)Пассивные умения персонажа, направленные на увеличение исходящего урона, уменьшение входящего урона, увеличение количества добываемых ресурсов и пр.\n8)Множество декоративных блоков.\n9)Разнообразных НПС и различные квесты с ценными наградами.");
    }
    if(message.content=="!help"){
        message.channel.send("\n``!info`` - Что из себя представляет LavaMod \n``!wiki`` - Википедия LavaCraft Mod \n``!lavatech`` - Информация о серверах LavaTech \n``!lavaclans`` - Информация о серверах LavaClans \n``!lavagregtech`` - Информация о сервере LavaGregTech");
    }
    if(message.content=="!lavagregtech"){
        message.channel.send("``LavaGregTech`` - \nЭто сервер с большим количеством механизмов и более сложным развитием с стандартным режимом пвп.");
    }
    if(message.content=="!lavatech"){
        message.channel.send("``LavaTech`` - \nЭто классические индустриальные сервера с игровым режимом пвп. *На LavaTech-2 установлен дополнительно мод RailCraft который добавляет различные виды новых рельс, логические системы для железнодорожных путей.");
    }
    if(message.content=="!lavaclans"){
        message.channel.send("``LavaClans`` - \nЭто сервера где игроки смогут объединяться в кланы, создавать их, вступать, приглашать друзей, объявлять войну другим кланам, а за победу получать очки. Также можно записаться на штурм, где будет сражение между кланами на право владеть замком.");
    }
    if(message.content=="!wiki"){
        message.channel.send("\n ``Википедия LavaCraft Mod`` - **http://wiki.lavacraft.ru/index.php/Заглавная_страница**");
    }
});
