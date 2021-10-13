// ##### | VARS | //
var toastTrigger = $('#btnNothing'),
    toastElement = $('#nothingToast'),
    siteCopy = enCopy;
// | VARS | ##### //

// ##### | FUNCTIONS | //

// ##### GetBrowserLanguages
function getUserMainLanguage (){
    //Vars
    var languageList = navigator.languages,
        mainLanguage = 'en',
        languagePT = false;
    //Find if user has "pt" in browser language list
    languagePT = $.inArray('pt', languageList) > -1;
    if(languagePT){ mainLanguage = 'pt'; }
    //Return lang
    return mainLanguage;
}
// | FUNCTIONS | ##### //

// ##### | ACTIONS | //
if (toastTrigger) {
    toastTrigger.on('click', function () {
        var toast = new bootstrap.Toast(toastElement)
        toast.show()
    })
}
// | ACTIONS | ##### //

// ##### | LANGUAGE | //
var ptCopy = {
    'h1': 'Olá',
    'p': 'Estou a renovar este espaço, novidades em breve.',
    'btnContact': 'Contacto',
    'btnNothing': 'Este botão não faz nada',
    'toastTitle': 'Eu avisei...',
    'toastWhen': 'Agora mesmo',
    'toastText': 'Eu avisei que o botão não fazia nada, isto foi uma perda de tempo.'
}, enCopy = {
    'h1': 'Hi!',
    'p': 'New site is coming. I swear.',
    'btnContact': 'Contact',
    'btnNothing': 'This does nothing at all',
    'toastTitle': 'I told you...',
    'toastWhen': 'just now',
    'toastText': 'I tried to warn you that the button does nothing, this was a waste of time.'
};

if(getUserMainLanguage() !== 'pt'){
    siteCopy = enCopy;
}else{
    siteCopy = ptCopy;
}

$('#heroTitle').text(siteCopy['h1']);
$('#heroText').text(siteCopy['p']);
$('#btnContact').text(siteCopy['btnContact']);
$('#btnNothing').text(siteCopy['btnNothing']);
$('#nothingToast .toast-header strong').text(siteCopy['toastTitle']);
$('#nothingToast .toast-header small').text(siteCopy['toastWhen']);
$('#nothingToast .toast-body').text(siteCopy['toastText']);

// | LANGUAGE | ##### //