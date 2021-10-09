// ##### | VARS | //
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
// | VARS | ##### //

// ##### | FUNCTIONS | //

// | FUNCTIONS | ##### //

// ##### | ACTIONS | //
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}
// | ACTIONS | ##### //