//Les taux selon les categorie pro
var NewArray = []
var Txcadre = 25.5/100
var Txfonctionnaire = 15/100
var TxPortage = 50/100
var TxIndependant = 45/100
var Txautoentrepreneur = 25/100
var Txautre = 23/100
NewArray.push(Txcadre, Txfonctionnaire, TxPortage, TxIndependant, Txautoentrepreneur, Txautre);

//La formule pour passer du salaire mensuel net au brut et inversement
var salairenetM = $('.formb').val()*(1-(Txautre));
var salairebrutM = $('.formn').val()/(1-(Txautre));

//------------------------------------------------------------------
//--------------------FONCTION QUE JE ME SERS PAS-------------------
//------------------------------------------------------------------
// Je vais tenter de créer une fonction NET et BRUT
// Permet de transformer une valeur BRUT en NET
function convertNET() {
    $('.formb').val()*(1-(Txautre))
};
// Permet de transformer une valeur NET en BRUT
function convertBRUT() {
    $('.formn').val()/(1-(Txautre))
};
//---------------
// Permet de passer du Annuel au Mensuel, je divise par 12 (mois)
function AnnToMen() {
    $('#mensuelbrut').val(($('#annuelbrut')/12));
};

// Permet de passer du Mensuel au Journalier, je divise par 20 (jours ouvrés)
function MenToJour() {
    $('#journalierbrut').val(($('#mensuelbrut')/20));
};

// Permet de passer du Journalier aux Horaires, je divise par 12 ( heures pr une journée comptable)
function JourToHor() {
    $('#horairebrut').val(($('#journalierbrut')/12));
};

//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
// $("#annuelbrut").val(($('#annuelnet').val()/(1-(Txautre))));
//     $("#mensuelbrut").val(($('#mensuelnet').val()/(1-(Txautre))));
//     $("#journalierbrut").val(($('#journaliernet').val()/(1-(Txautre))));
//     $("#horairebrut").val(($('#horairenet').val()/(1-(Txautre))));
//------------------------------------------------------------------
//----------------------TEST TEST TEST -----------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------

// PERMET DE CONVERTIR LE SALAIRE ANNUEL EN MENSUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("annuelbrut").addEventListener("input", function(){
    ( $('#mensuelbrut').val(($('#annuelbrut').val()/12)));
    ( $('#journalierbrut').val(($('#annuelbrut').val()/260)));
    ( $('#horairebrut').val(($('#annuelbrut').val()/1607)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txautre))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txautre))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txautre))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txautre))));
    
});

// PERMET DE CONVERTIR LE SALAIRE MENSUEL EN ANNUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("mensuelbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#mensuelbrut').val()*12)));
    ( $('#journalierbrut').val(($('#mensuelbrut').val()/21.667)));
    ( $('#horairebrut').val(($('#mensuelbrut').val()/151.67)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txautre))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txautre))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txautre))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txautre))));

});

//PERMET DE CONVERTIR LE SALAIRE JOURNALIER EN ANNUEL,MENSUEL,HORAIRE + NET et BRUT
document.getElementById("journalierbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#journalierbrut').val()*260)));
    ( $('#mensuelbrut').val(($('#journalierbrut').val()*21.667)));
    ( $('#horairebrut').val(($('#journalierbrut').val()/7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txautre))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txautre))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txautre))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txautre))));

});

//PERMET DE CONVERTIR LE SALAIRE HORAIRE EN ANNUEL,MENSUEL,JOURNALIER + NET et BRUT
document.getElementById("horairebrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#horairebrut').val()*1607)));
    ( $('#mensuelbrut').val(($('#horairebrut').val()*151.67)));
    ( $('#journalierbrut').val(($('#horairebrut').val()*7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txautre))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txautre))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txautre))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txautre))));

});

//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------

// Je veux que lorsque j'appel la fonction selon l'endroit cela convertisse pour eviter les repetitions de code. COMME PRECEDEMMENT DANS TEST.

//------------------------------------------------
// Je dois créer un Array avec mes VAR de taux. 
//Je dois créer un Array avec mes ID d'input ||OU|| de mes class 'formn' et 'formb'

//((((((((((((((((((((((((((((((((FONCTION TAUX))))))))))))))))))))))))))))))))


//(((((((((((((((((((((((((((((((((ClICK STATUS)))))))))))))))))))))))))))))))))
// Quand je click sur la checkbox cela change l'intitulé MAIS ne change pas en direct.

//STATUT CADRE
$('#cadre').click(function(){
    var c = $('input:checked').length
    $( "#TAUXX" ).text((c === 1 ?  ("Taux: 25.5%") : ("Taux: 23%")));

// PERMET DE CONVERTIR LE SALAIRE ANNUEL EN MENSUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("annuelbrut").addEventListener("input", function(){
    ( $('#mensuelbrut').val(($('#annuelbrut').val()/12)));
    ( $('#journalierbrut').val(($('#annuelbrut').val()/260)));
    ( $('#horairebrut').val(($('#annuelbrut').val()/1607)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txcadre))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txcadre))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txcadre))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txcadre))));
});
// PERMET DE CONVERTIR LE SALAIRE MENSUEL EN ANNUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("mensuelbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#mensuelbrut').val()*12)));
    ( $('#journalierbrut').val(($('#mensuelbrut').val()/21.667)));
    ( $('#horairebrut').val(($('#mensuelbrut').val()/151.67)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txcadre))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txcadre))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txcadre))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txcadre))));
});
//PERMET DE CONVERTIR LE SALAIRE JOURNALIER EN ANNUEL,MENSUEL,HORAIRE + NET et BRUT
document.getElementById("journalierbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#journalierbrut').val()*260)));
    ( $('#mensuelbrut').val(($('#journalierbrut').val()*21.667)));
    ( $('#horairebrut').val(($('#journalierbrut').val()/7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txcadre))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txcadre))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txcadre))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txcadre))));
});
//PERMET DE CONVERTIR LE SALAIRE HORAIRE EN ANNUEL,MENSUEL,JOURNALIER + NET et BRUT
document.getElementById("horairebrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#horairebrut').val()*1607)));
    ( $('#mensuelbrut').val(($('#horairebrut').val()*151.67)));
    ( $('#journalierbrut').val(($('#horairebrut').val()*7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txcadre))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txcadre))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txcadre))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txcadre))));
});
});

//STATUS FONCTIONNAIRE
$('#fonctionnaire').click(function(){
    var f = $('input:checked').length
    $( "#TAUXX" ).text((f === 1 ?  ("Taux: 15%") : ("Taux: 23%")));

// PERMET DE CONVERTIR LE SALAIRE ANNUEL EN MENSUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("annuelbrut").addEventListener("input", function(){
    ( $('#mensuelbrut').val(($('#annuelbrut').val()/12)));
    ( $('#journalierbrut').val(($('#annuelbrut').val()/260)));
    ( $('#horairebrut').val(($('#annuelbrut').val()/1607)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txfonctionnaire))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txfonctionnaire))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txfonctionnaire))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txfonctionnaire))));
});
// PERMET DE CONVERTIR LE SALAIRE MENSUEL EN ANNUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("mensuelbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#mensuelbrut').val()*12)));
    ( $('#journalierbrut').val(($('#mensuelbrut').val()/21.667)));
    ( $('#horairebrut').val(($('#mensuelbrut').val()/151.67)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txfonctionnaire))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txfonctionnaire))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txfonctionnaire))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txfonctionnaire))));
});
//PERMET DE CONVERTIR LE SALAIRE JOURNALIER EN ANNUEL,MENSUEL,HORAIRE + NET et BRUT
document.getElementById("journalierbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#journalierbrut').val()*260)));
    ( $('#mensuelbrut').val(($('#journalierbrut').val()*21.667)));
    ( $('#horairebrut').val(($('#journalierbrut').val()/7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txfonctionnaire))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txfonctionnaire))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txfonctionnaire))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txfonctionnaire))));
});
//PERMET DE CONVERTIR LE SALAIRE HORAIRE EN ANNUEL,MENSUEL,JOURNALIER + NET et BRUT
document.getElementById("horairebrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#horairebrut').val()*1607)));
    ( $('#mensuelbrut').val(($('#horairebrut').val()*151.67)));
    ( $('#journalierbrut').val(($('#horairebrut').val()*7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txfonctionnaire))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txfonctionnaire))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txfonctionnaire))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txfonctionnaire))));
});
});

//STATUS PORTAGE
$('#portage').click(function(){
    var p = $('input:checked').length
    $( "#TAUXX" ).text((p === 1 ?  ("Taux: 50%") : ("Taux: 23%")));

// PERMET DE CONVERTIR LE SALAIRE ANNUEL EN MENSUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("annuelbrut").addEventListener("input", function(){
    ( $('#mensuelbrut').val(($('#annuelbrut').val()/12)));
    ( $('#journalierbrut').val(($('#annuelbrut').val()/260)));
    ( $('#horairebrut').val(($('#annuelbrut').val()/1607)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txportage))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txportage))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txportage))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txportage))));
});
// PERMET DE CONVERTIR LE SALAIRE MENSUEL EN ANNUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("mensuelbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#mensuelbrut').val()*12)));
    ( $('#journalierbrut').val(($('#mensuelbrut').val()/21.667)));
    ( $('#horairebrut').val(($('#mensuelbrut').val()/151.67)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txportage))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txportage))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txportage))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txportage))));
});
//PERMET DE CONVERTIR LE SALAIRE JOURNALIER EN ANNUEL,MENSUEL,HORAIRE + NET et BRUT
document.getElementById("journalierbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#journalierbrut').val()*260)));
    ( $('#mensuelbrut').val(($('#journalierbrut').val()*21.667)));
    ( $('#horairebrut').val(($('#journalierbrut').val()/7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txportage))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txportage))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txportage))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txportage))));
});
//PERMET DE CONVERTIR LE SALAIRE HORAIRE EN ANNUEL,MENSUEL,JOURNALIER + NET et BRUT
document.getElementById("horairebrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#horairebrut').val()*1607)));
    ( $('#mensuelbrut').val(($('#horairebrut').val()*151.67)));
    ( $('#journalierbrut').val(($('#horairebrut').val()*7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txportage))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txportage))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txportage))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txportage))));
});
});

//STATUS INDEPENDANT
$('#independant').click(function(){
    var i = $('input:checked').length
    $( "#TAUXX" ).text((i === 1 ?  ("Taux: 45%") : ("Taux: 23%")));

// PERMET DE CONVERTIR LE SALAIRE ANNUEL EN MENSUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("annuelbrut").addEventListener("input", function(){
    ( $('#mensuelbrut').val(($('#annuelbrut').val()/12)));
    ( $('#journalierbrut').val(($('#annuelbrut').val()/260)));
    ( $('#horairebrut').val(($('#annuelbrut').val()/1607)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txindependant))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txindependant))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txindependant))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txindependant))));
});
// PERMET DE CONVERTIR LE SALAIRE MENSUEL EN ANNUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("mensuelbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#mensuelbrut').val()*12)));
    ( $('#journalierbrut').val(($('#mensuelbrut').val()/21.667)));
    ( $('#horairebrut').val(($('#mensuelbrut').val()/151.67)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txindependant))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txindependant))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txindependant))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txindependant))));
});
//PERMET DE CONVERTIR LE SALAIRE JOURNALIER EN ANNUEL,MENSUEL,HORAIRE + NET et BRUT
document.getElementById("journalierbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#journalierbrut').val()*260)));
    ( $('#mensuelbrut').val(($('#journalierbrut').val()*21.667)));
    ( $('#horairebrut').val(($('#journalierbrut').val()/7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txindependant))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txindependant))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txindependant))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txindependant))));
});
//PERMET DE CONVERTIR LE SALAIRE HORAIRE EN ANNUEL,MENSUEL,JOURNALIER + NET et BRUT
document.getElementById("horairebrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#horairebrut').val()*1607)));
    ( $('#mensuelbrut').val(($('#horairebrut').val()*151.67)));
    ( $('#journalierbrut').val(($('#horairebrut').val()*7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txindependant))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txindependant))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txindependant))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txindependant))));
});
});

//STATUS INDEPENDANT
$('#autoE').click(function(){
    var au = $('input:checked').length
    $( "#TAUXX" ).text((au === 1 ?  ("Taux: 25%") : ("Taux: 23%")));

// PERMET DE CONVERTIR LE SALAIRE ANNUEL EN MENSUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("annuelbrut").addEventListener("input", function(){
    ( $('#mensuelbrut').val(($('#annuelbrut').val()/12)));
    ( $('#journalierbrut').val(($('#annuelbrut').val()/260)));
    ( $('#horairebrut').val(($('#annuelbrut').val()/1607)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txautoentrepreneur))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txautoentrepreneur))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txautoentrepreneur))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txautoentrepreneur))));
});
// PERMET DE CONVERTIR LE SALAIRE MENSUEL EN ANNUEL,JOURNALIER,HORAIRE + NET et BRUT
document.getElementById("mensuelbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#mensuelbrut').val()*12)));
    ( $('#journalierbrut').val(($('#mensuelbrut').val()/21.667)));
    ( $('#horairebrut').val(($('#mensuelbrut').val()/151.67)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txautoentrepreneur))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txautoentrepreneur))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txautoentrepreneur))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txautoentrepreneur))));
});
//PERMET DE CONVERTIR LE SALAIRE JOURNALIER EN ANNUEL,MENSUEL,HORAIRE + NET et BRUT
document.getElementById("journalierbrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#journalierbrut').val()*260)));
    ( $('#mensuelbrut').val(($('#journalierbrut').val()*21.667)));
    ( $('#horairebrut').val(($('#journalierbrut').val()/7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txautoentrepreneur))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txautoentrepreneur))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txautoentrepreneur))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txautoentrepreneur))));
});
//PERMET DE CONVERTIR LE SALAIRE HORAIRE EN ANNUEL,MENSUEL,JOURNALIER + NET et BRUT
document.getElementById("horairebrut").addEventListener("input", function(){
    ( $('#annuelbrut').val(($('#horairebrut').val()*1607)));
    ( $('#mensuelbrut').val(($('#horairebrut').val()*151.67)));
    ( $('#journalierbrut').val(($('#horairebrut').val()*7)));

    $("#annuelnet").val(($('#annuelbrut').val()*(1-(Txautoentrepreneur))));
    $("#mensuelnet").val(($('#mensuelbrut').val()*(1-(Txautoentrepreneur))));
    $("#journaliernet").val(($('#journalierbrut').val()*(1-(Txautoentrepreneur))));
    $("#horairenet").val(($('#horairebrut').val()*(1-(Txautoentrepreneur))));
});
});



