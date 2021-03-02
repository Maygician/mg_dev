// var iam = "pubkey11";//id
// var datasources = {};
// datasources.gui={};

// // var publish(where);

// // on(datasource, event) do:
// function on_(datasource, event, do_){
//     //check if subbed 
//     //sub(do_)


// }
// wire(datasource)
// relay(datasource)
// user_sign
// user_encrypt
/**
 * Deafault authorized data source - https
 * 
 * 
 * example: relay picture, input, 
 * 
 * 
 * I AM %Pubkey%
 * So, what do you want, pubkey.getassociateddata?
 * I brought you dragon's head, you requested, here: (signed piece of data)
 * -checks. It is the one. Your reward: ()
 */
function validate_gun_server_text(text) {

    return false
}
function derive_key(alias, pass, kdf){
    return kdf(alias, pass)
}
function sign_in(){
    //validation: todo
    let alias=document.getElementById(login_alias);
    let pass=document.getElementById(login_password);
    let gunServer = document.getElementById(gun_server);
    console.log(validate_gun_server_text(gunServer))
    console.log(gunServer)
    let gun = Gun(gunServer);
    let user = gun.user();
    user.auth(alias, pass)
    // user.auth(alias, pass, cb, opt)
    return gun;    
}
function sign_in(alias, pass, gunServer){
    //validation: todo
    console.log(gunServer)
    let gun = Gun(gunServer);
    let user = gun.user();
    user.auth(alias, pass)
    // user.auth(alias, pass, cb, opt)
    return gun;    
}
function sign_up(){
    //validation: todo
    let alias=document.getElementById(login_alias);
    let pass=document.getElementById(login_password);
    let gunServer = document.getElementById(gun_server);
    console.log(gunServer)
    let gun = Gun(gunServer);
    let user = gun.user();
    user.auth(alias, pass)
    return gun;    
    // user.auth(alias, pass, cb, opt)
}
function sign_up(alias, pass, gunServer){
    //validation: todo
    console.log(gunServer)
    let gun = Gun(gunServer);
    let user = gun.user();
    user.auth(alias, pass)
    // user.auth(alias, pass, cb, opt)
    return gun;    
}

var encrypt_ = function(keypair, algorithm, data){}
var decrypt_ = function(keypair, algorithm, data){}
var sign_ = function(keypair, algorithm, data){}


/* first, 
indexeddb, then check servers or sign in to specific, if first time.
*/
function indexeddb_has_saved_data (){return false};
;(()=>{
    if(!indexeddb_has_saved_data())
    if(confirm("Hey, I don't remember you. Wanna use this temporal ID?"))
    {alert("Here. You are zcsa8d2 now. Congratulations! \n You can set a name and save whole thing later, here.")
highlight("save_profile");
}
    else
    {if(confirm("Then you have it stored somewhere else?")){
        console.log(window.prompt("where?","https://localhost:8765/gun"));

}else 
alert("Ok, Bye!")
}

    // window.prompt("sometext","defaultText");

})();
function on_user_joined(){
    //check something 
    var indexeddb_has_saved_data = false;
    if(indexeddb_has_saved_data)
    alert("Hi, mr old user, we have you backed!")
    else {
        if(confirm("Hey, I don't remember you. Wanna use this temporal ID?"))
    {alert("Here. You are zcsa8d2 now. Congratulations!")}
    else//temp id proposal declined
    {if(confirm("Then you have it stored somewhere else?")){
            window.prompt("where?","https://localhost:8765/gun");

    }else 
    alert("Ok, Bye!")
}
        }


}
function user_new()
{
    // var user = 
}
function highlight(what){
    alert(`From highlight \nThis thing actually does nothing for now. Sorry :-(\n But you can search for ${what}; manually`)
}