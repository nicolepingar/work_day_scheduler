// Current date at top of page
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));
// To get data from local storage on refresh
function getLocal() {
    $(".inputField").each(function () {
        var inputValue = $(this).attr("id");
        $(this).val(localStorage.getItem(inputValue));
    }
    )
}
// changes colors based on time of day
function colorChange() {
    // .inputField sets the location for "this", ".each" allows function to run through each container
    $(".inputField").each(function () {
        // "H" format puts time in military hour
        var todayInTime = moment().format("H")
        // "this" refers back to .inputfield, each input has a different id#, parseInt turns it into a number 
        var hour = parseInt($(this).attr("id"))
        // each class is connected to a different color
        if (hour < todayInTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (hour == todayInTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
}
// "this" now refers to .saveButton
// when save button is clicked, text from input field is saved in local storage
$(".saveButton").on("click", function () {
    // meetings = .saveButton's sibling (inputField)'s, value 
    var meetings = $(this).siblings(".inputField").val();
    // time = .saveButton's sibling (inputField)'s id (unique number based on time)
    var time = $(this).siblings(".inputField").attr("id");
    // local storage store time as the id # and meetings as the typed input text 
    localStorage.setItem(time, meetings);
})
// calls function to pull data from local storage
getLocal();
// calls function to change colors based on time 
colorChange();
