function hint(src){
    var cont = document.getElementById("hint");
    cont.innerHTML = add[src]
  }
var add =  {}
add.clear = ''
add.add=`
Longass text from add.js
`
add.editui=`
Editui hint
`
add.devices=`
About devices:
Devices range from calculating devices, such as remote server (including colab), local node
to sensors to user devices, such as phones, browser tabs, watches...

UI frames: browser tabs with their state across devices, including virtual ones (screen in vr/ar)
Sensors:
`
add.profile=`
Profile hint
`
add.item_sample=`
Emitent: wejhrk3h4721223fjsdf known to me as Alice, 
hubs: http://www.longass.link 
Description: One small wish from the list
Guarantee:  http://www.longass.link/alice's_wish_list 
`
add.signup=`
Sign up: 
Create a new user (keypair), add them to particular server.
Each server has a list of users, known to them. 
User represented by their publ key.
You authenticate on a specific resource with
`
add.arch_ui=`
Ui: distributed across multiple devices and tabs. For one browser, in order to work with multiple tabs correctly
(concern regarding service worker in vr browsers, where you might want multiple tabs to float around, keeping different context), 
it is split into so called screens, with the ability for user to choose between those
`
add.arch_data_flow=`
Data flow:
Each client of a single user is connected to the common server of their chosing.
Data is synced between those.
In order for two users to interact with each other, they need to have a common trusted agent (hub), where both are authorised and their transactions are kept

`
add.arch_content_source=`
Client is formed from 
`
add.arhc_keeper =`
Keeper is a trusted relay node, authorized medium, that assures that it has enough information for the task at hand to be executed.
Example: quest. One user creates a new quest and then assigns it to another user. The keeper's role is to make sure second user gets their reward
on completion and the first user gets their job done. 
`
add.feature_quest =`
Quest. Can be in a different format, each format has their own parser/interface.
Common property of any quest is that it is an agreement, which has a done criteria and a reward assigned to it. 
Once it's completed, the reward is transmited to the beneficiar. 
Done criteria should be defined the way it can be automatically checked for success. 
Usually, there's a variable which needs to have a specific value, that's updated by the trigger. 
Triggers range from manual input (you have to be careful with these, as it brings a human factor) to anything, that can update that specific var (sensors, calculations, etc)

`
add.x=`
So i have my private keys kept on my device or being formed in runtime.
I can prove that I am me. 
Now we need the other party to know, what is behind this 'me'.
There's a set of nodes that know my pub key and has some data associated with it. 

`

add.guild =`Authority, might be a keeper. 
Guild has a server.
Form of organization, responsible for the following:
Has a task or field of application, associated with it.
May be responsible for skills(certifying and suggesting),
Also, actor. Has their utility function. Probably backed by AI (not necessary)...    

`


add.guild_creation =`
- "I need food"
- "Me too"
- "Let's create a food guild!"
Food guild:
Knows, where to get the food. 

`
add.guild_members =`They have roles. Being a member means, that one's pubkey is listed and some meta information is associated with it. 
Which includes: `

add.guild_branch =`Another guild, subset of this one. `

add.player=`
has associated ways to contact with them (direct channels, proxies, meeting hubs)
public, private key.
utility function (declared, private, known)

`

add.player_to_another_player = `
pubkey, knowledge base (meta, like location, skills and stuff like that, their utility function, traits..)
shared data (streams..)
Who_knows_chain
`

add.reqs = `
List the traits needed for the task, client fetches this list and verifies, whether or not it has those and answers.
It works like this: some traits are certified, with the help of their respective certifying center. Example: english skill - b1 cert from some academy.
`
add.concept=`
Guild is a solution for the common problem
Need someone or something in a specific state?
If it's something - assign a quest to somebody to change it.
Someone - skill/.........
Example: in order to operate, guild needs its members to be able to perform some stuff.
So it rewards them for polishing related skills,
as well as providing them with skill books/skill tree/whatever the form is. Making sure they can learn and we can track it.
Also, it hoards some resources. => rewards for bringing those. 

`

add.execution=`
delayed and conditional execution on the third party hardware
(guarantee does this)
`
add.add_devices=`Colab, flipper, iphone`

add.user_flow = `
opens client (browser, in this example)
client checks whether it has any session stored (indexeddb)

`