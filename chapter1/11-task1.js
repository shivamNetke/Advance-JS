let name = "shivam";
const age = 21;
let day = "saturday";


   
    if (age >= 19) {
        console.log("you are adult");
    } else if (age < 18) {
        console.log("you are minor");
    } else if (age > 100) {
        console.log("imaginary age");
    } else if (age < 1) {
        console.log("age must be greater than 0");
    } else {
        console.log("invalid age");
    }

    console.log("what day is today : ");

    switch (day) {  
        case "monday":
            console.log("ohh today is monday");
            break;
        
        case "tuesday":
            console.log("ohh today is tuesday");
            break;

        case "wednesday":
            console.log("ohh today is wednesday");
            break;
                
        case "thursday":  
            console.log("ohh today is thursday");
            break;

        case "friday":
            console.log("ohh today is friday");
            break;

        case "saturday":
            console.log("ohh today is saturday");
            break;

        case "sunday":
            console.log("ohh today is sunday");
            break;

        default:
            console.log("invalid input");
    }

