//function currentdate(days, months, today, finaldate) {
    function currentdate() {
        "use strict";
    
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        var today = new Date();
    
        var finaldate = days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] +  " " + today.getFullYear();
    
        return finaldate;
    }
    
    function populateFooter() {
        var footerText = "&copy; " + currentdate() + " | Lynnda Robinson ";
    
        document.getElementById("footer").innerHTML = footerText;
    }
    
    populateFooter();