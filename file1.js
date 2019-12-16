const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://kiran:2310kiran@dbcluster-tg3h6.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri,{useUnifiedTopology: true}, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   //var collection = client.db("hospital").collection("doctor");
   var database1 = client.db("hospital");
	//kiranjeet kaur
    var nurseInfo= [
    {Name:"Mary",lastName:"Advert",age:29,phone:"0149580728"},
    {Name:"Cheryy",age:30,phone:"0145311080"},
    {Name:"Happy",lastName:"DIDONNA",age:27,phone:"+33(0)493766564"},
    {Name:"Sunita",age:33,phone:"014527850"},
    {Name:"Sharry",lastName:"D'sousa",age:25,phone:"+33(0)6097700"},
    {Name:"Eliana",lastName:"D'cousta",age:28,phone:"+508777060"} 
    ];	
	database1.collection("Nurse").insertMany(nurseInfo,function(err,response){
	if (err) throw err;
    console.log("documents entered for collection nurse! ");
    client.close();
    }); 
});