// 1. Always Hungry

function alwaysHungry(arr) {
    let store = "";
    for(i=0; i <= arr.length; i ++){
        //console.log( arr[i]);        
        if (arr[i] === "food"){
            console.log( "yummy");
            store =  "food";
            //store.push("food");
            //console.log( store);
            //return store;
            }
            //console.log( store);
    }
    //console.log(store);
    if (store !== "food"){
        console.log( "I'm hungry");  
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"