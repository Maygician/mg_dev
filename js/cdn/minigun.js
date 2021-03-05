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

/*
from?
has access?
check against lists
groups, lists, rights
*****/