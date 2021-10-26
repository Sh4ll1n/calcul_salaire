//Les taux selon les statuts
var Txcadre = 25.5/100
var Txfonctionnaire = 15/100
var TxPortage = 50/100
var TxIndependant = 45/100
var Txautoentrepreneur = 25/100
var Txautre = 23/100
//La formule pour passer du salaire mensuel net au brut et inversement
var salairenetM = $('#mensuelbrut').val()*(1-(Txautre));
var salairebrutM = $('mensuelnet').val()/(1-(Txautre));

// On tape un nombre dans le formulaire mensuel net. Cela nous retourne dans console log le resultat en brut. 
//Puis j'essaye de faire passer ce resultat dans le input BRUT. 
    

    var test = document.getElementById("mensuelnet");
test.addEventListener("input", function(){
    console.log($('#mensuelnet').val()/(1-(Txautre)))
    $('mensuelbrut').val() = $('#mensuelnet').val()/(1-(Txautre)) 
});