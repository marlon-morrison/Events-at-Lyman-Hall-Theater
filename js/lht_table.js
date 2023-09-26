"use strict";

var eventDates = ["July 29, 2023 11:00:00", "July 30, 2023 19:00:00", "July 31, 2023 19:30:00", 
                 "August 2, 2023 19:00:00", "August 3, 2023 20:00:00", "August 4, 2023 19:30:00", 
                 "August 5, 2023 11:00:00", "August 6, 2023 19:00:00", "August 8, 2023 19:00:00", 
                 "August 9, 2023 19:30:00", "August 10, 2023 19:30:00", "August 11, 2023 19:30:00", 
                 "August 12, 2023 11:00:00", "August 14, 2023 19:00:00", "August 15, 2023 19:30:00", 
                 "August 16, 2023 19:30:00", "August 17, 2023 19:30:00", "August 18, 2023 19:30:00", 
                 "August 19, 2023 11:00:00", "August 20, 2023 19:00:00", "August 22, 2023 18:00:00", 
                 "August 23, 2023 19:00:00", "August 24, 2023 20:00:00", "August 25, 2023 20:00:00", 
                 "August 26, 2023 11:00:00", "August 28, 2023 18:00:00", "August 29, 2023 18:00:00", 
                 "August 31, 2023 19:30:00", "September 1, 2023 19:00:00", "September 2, 2023 11:00:00", 
                 "September 4, 2023 19:00:00", "September 5, 2023 19:00:00", "September 6, 2023 19:00:00", 
                 "September 7, 2023 19:00:00", "September 8, 2023 19:00:00", "September 9, 2023 11:00:00",
                 "September 10, 2023 19:00:00", "September 12, 2023 20:00:00", "September 13, 2023 20:00:00"];
                 
var eventDescriptions = ["Classics Brunch", "Lasers and Light", "Dixieland Jazz Masters", 
                        "Classic Cinema: Wings", "The Future is Prologue", "American Favorites", 
                        "Classics Brunch", "LHT Jazz Band", "Civic Forum", "Hamilton", "Hamilton", 
                        "Hamilton", "Classics Brunch", "Hacking your Dreams", "Hamilton", "Hamilton", 
                        "Hamilton", "Hamilton", "Classics Brunch", "What Einstein Got Wrong", 
                        "Governor's Banquet", "Classic Cinema: City Lights", "Stardust Memories", 
                        "Summer Concert", "Classics Brunch", "Childrens Shakespeare", "Kids Fair", 
                        "Have Spacesuit, Will Travel", "Cabaret", "Classics Brunch", 
                        "Visions of Light and Dreams", "San Diego Blues", "Cabaret", "Cabaret", 
                        "Cabaret", "Classics Brunch", "Classic Cinema: Safety First", "Exit Stage Left", "Antonio Perez"];

var eventPrices = ["$12", "$12/$18/$24", "$22/$31/$47", "$5", "$18/$24/$36", "$24/$36/$48", "$12", "$24", 
                 "free", "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "free", "$48/$64/$88", 
                 "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "free", "by invitation", "$5", 
                 "$24/$36/$48", "$16/$24", "$12", "free", "free", "$22/$36/$48", "$48/$64/$88", "$12", 
                 "$18/$32", "$24/$36", "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "$12",
                 "$18/$28/$36", "$32/$48/$64"];

var thisDay = new Date("August 30, 2023");

var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   
   if (thisDay <= eventDate && eventDate <= endDate) {
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}
   console.log(eventDate);
tableHTML += "</table>";
console.log(document.getElementById("eventList"));
document.getElementById("eventList").innerHTML = tableHTML;