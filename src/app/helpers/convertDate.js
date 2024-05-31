export function formatFullDateTime(datetimeString) {
 // Create a new Date object from the input datetime string
 const date = new Date(datetimeString);

 // Define arrays for days of the week and months
 const months = [
     "January", "February", "March", "April", "May", "June", 
     "July", "August", "September", "October", "November", "December"
 ];

 // Get the day of the week, day, month, year, hours, and minutes from the Date object
 const day = date.getDate();
 const month = months[date.getMonth()];
 const year = date.getFullYear();
 const hours = date.getHours().toString().padStart(2, '0');
 const minutes = date.getMinutes().toString().padStart(2, '0');

 // Format the date and time string
 return `${day} ${month} ${year}, ${hours}:${minutes}`;
}

// Example usage:
const datetimeString = "2024-06-12T15:30:00Z";
const formattedDateTime = formatFullDateTime(datetimeString);
console.log(formattedDateTime); // Output: "Wednesday, 12 June 2024, 15:30"

export function formatDate(datetimeString) {
 // Create a new Date object from the input datetime string
 const date = new Date(datetimeString);

 // Define an array for months
 const months = [
     "January", "February", "March", "April", "May", "June", 
     "July", "August", "September", "October", "November", "December"
 ];

 // Get the day, month, and year from the Date object
 const day = date.getDate();
 const month = months[date.getMonth()];
 const year = date.getFullYear();

 // Format the date string
 return `${day} ${month} ${year}`;
}

// Example usage:
const formattedDate = formatDate(datetimeString);
console.log(formattedDate); // Output: "12 June 2024"

