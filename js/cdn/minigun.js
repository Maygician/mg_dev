class MiniGun{
    constructor(){
        this.transport = {};
        // this.
    };
    store(storage_adapters, msg){
        for(var i=0;i<storage_adapters.length;i++){
            storage_adapters[i].store(msg);
        }
    };
    retrieve(storage, key){
        return value(storage[key])
    }
    wire(){};
    exchange(){};
    encrypt(){};
    send(){};
    request(){};
    sync(){};
    subscribe(){};
    cert_upgrade(){
        // returns the same shit signed with a better key
        megafunc(encrypt_with,transmit_to,keep_updated)
    };
    /*
    ask to sign
    ask to relay 
    discover, complex routes
    shared mem
    */
}
var access={};
access.action1.granted_to={}
var scope={};
scope.public_read={};
scope.groups={};

// pubsub

function publish(topic, message){
    var receivers = resolve(topic)
    receivers.publish(message)
}
function resolve(topic){
    receivers = topic.list
}
var store ={};
store.cache={}
store.file={}
store.remote={}
store.indexeddb={}
// agent.quota={}//save and transfer only this much per agent
/*
device specific adapters, implementing only minimal set of methods for pubsub/stream 
*/
/*
from?
has access?
check against lists
groups, lists, rights
*****/