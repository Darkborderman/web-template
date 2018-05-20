let MongoClient=require('mongodb').MongoClient;
let userName="name";
let userPassword="password";
let serverHost="localhost";
let serverPort=27017;
let databaseURL=`mongodb://${userName}:${userPassword}@${serverHost}:${serverPort}`;

let databaseName="test";
let databaseCollection="test";

function mongoInsert(data){
    //about to insert data
    MongoClient.connect(databaseURL,function(err,client) {

        if(err) throw err;
        else{
            let currentDatabase=client.db(databaseName);
            let currentCollection=currentDatabase.collection(databaseCollection);
            let insertData=data;
            currentCollection.insertOne(insertData,function(err,res) {
                if(err) throw err;
                else console.log("1 document inserted");
                client.close();
            });
        }
    }); 
}

function mongoFind(){
    //about to find data in database
    MongoClient.connect(databaseURL, function(err, client) {

        if(err) throw err;
        else{
            let currentDatabase=client.db(databaseName);
            let currentCollection=currentDatabase.collection(databaseCollection);
            currentCollection.find({}).toArray(function(err,result){
                if (err) throw err;
                else console.log(result);
                client.close();
            });
        }
    });
}

module.exports=
{
    mongoInsert,
    mongoFind,
};