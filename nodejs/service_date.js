var express= require('express');
var app=express();
var time=new  Date();
var jasonfile=JSON.stringify(time);

app.get('/service', function(req,res) {

                 //faire une requete  pour renvoyer la date avec le type iso
if(req.query.type=="iso"){
res.send(new Date(time).toISOString());
}
                 //faire une requete pour renvoyer la date avec le type data
if(req.query.type=="date"){
res.send(new Date(time).toDateString());

}
else
{
res.send("Erreur");
}

                  //console.log(time);
                  //console.log(jasonfile);

});
app.listen(3000, function(){
console.log('en ecoute sur le port *:3000');
});