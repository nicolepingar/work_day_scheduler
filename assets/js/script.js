// Current date at top of page
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

$(document).ready(function () {
    function getLocal() {
        $(".inputField").each(function () {
            var inputValue = $(this).attr("id");
            $(this).val(localStorage.getItem(inputValue));   
        }
        )  
    }

    function colorChange() {
        $(".inputField").each(function () {
            var todayInTime = moment().format("H")
            var hour = $(this).attr("id")
            console.log(hour);
            console.log(todayInTime);
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
   
    $(".saveButton").on("click", function () {
        var meetings = $(this).siblings(".inputField").val();
        var time = $(this).siblings().eq(1).attr("id");
        
        localStorage.setItem(time, meetings);
    
    })
   getLocal(); 
   colorChange();
})