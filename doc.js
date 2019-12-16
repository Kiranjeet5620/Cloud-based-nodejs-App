const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
var uri = "mongodb+srv://kiran:2310kiran@dbcluster-tg3h6.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri,{useUnifiedTopology: true}, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   //var collection = client.db("hospital").collection("doctor");
   var database1 = client.db("hospital");
	//KiranjeetKaur
    var pateintInfo= [{firstName:"Amanpreet",lastName:"Kaur",age:26,phone:"683547528",problem:"flu"},
    {firstName:"Kiranjeet",lastName:"Kaur",age:23,phone:"4372276877",problem:"depression"},
    {firstName:"Sonia",lastName:"Mehta",age:24,phone:"7646737374",problem:"headache"},
    {firstName:"Kamal",lastName:"Kaur",age:27,phone:"7646745875",problem:"Overweight and Obesity"},
    {firstName:"Maya",age:40,phone:"0145246950",problem:"Salmonella"},
    {firstName:"Kaya",age:50,phone:"76776789790",problem:"Asthma"},
    {firstName:"Zoya",age:34,phone:"+508417060",problem:"Arthritis"},
    {firstName:"Ashley",lastName:"Patterson",age:45,phone:"4354535454",problem:"Epilepsy"},
    {firstName:"Alette",lastName:"Peters",age:32,phone:"656789987",problem:"Diabetes"},
    {firstName:"Toni",lastName:"Prescott",age:29,phone:"987654321",problem:"Hepatitis"},
    ];	
	database1.collection("patient").insertMany(pateintInfo,function(err,response){
	if (err) throw err;
    console.log("documents entered for collection patients! ");
    client.close();
    }); 
});