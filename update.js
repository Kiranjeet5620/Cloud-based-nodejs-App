const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://kiran:2310kiran@dbcluster-tg3h6.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri,{useUnifiedTopology: true}, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   //var collection = client.db("hospital").collection("doctor");
   var database1 = client.db("hospital");
	//kiranjeetkaur//delete document
   var data={firstName:"Dr David"};
   var values={phone:"+33(0)493882038"};
	database1.collection("doctor").update(data,values,function(err,response){
	if (err) throw err;
    console.log("updated dr.david's phpne number ");
    client.close();
    }); 
});