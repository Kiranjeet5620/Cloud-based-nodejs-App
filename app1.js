const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://kiran:2310kiran@dbcluster-tg3h6.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri,{useUnifiedTopology: true}, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   //var collection = client.db("hospital").collection("doctor");
   var database1 = client.db("hospital");
	
    var doctorInfo= [{firstName:"Dr David",lastName:"AJZENFISZ",age:50,specialist:"Neurologist",phone:"+33(0)493882038"},
    {firstName:"Dr Jean-Pierre",lastName:"AUBERT",age:52,specialist:"Physiatrist",phone:"0142580728"},
    {firstName:"Dr Michel",lastName:"DANILOSKI",age:55,specialist:"Surgeon",phone:"0145311080"},
    {firstName:"Dr Roland",lastName:"DIDONNA",age:55,specialist:"Optometrist",phone:"+33(0)493566564"},
    {firstName:"Dr Gunita",lastName:"JOLLY",age:43,specialist:"Dermatologist",phone:"0145246950"},
    {firstName:"Dr Stéphane",lastName:"LEANDRI",age:40,specialist:"gynecologist",phone:"+33(0)607931100"},
    {firstName:"Dr Michel",lastName:"POUDER",age:52,specialist:"ENT",phone:"+508417060"} 
    ];	
	database1.collection("doctor").insertMany(doctorInfo,function(err,response){
	if (err) throw err;
    console.log("documents entered for collection doctor! ");
    client.close();
    }); 
});