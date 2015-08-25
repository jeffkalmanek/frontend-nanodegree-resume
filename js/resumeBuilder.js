/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Jeffrey Kalmanek";
var role = "Web Developer"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
	"position" : "Principal Product Development Engineer",
};

work.employer = "AT&T";
work.years = "5";
work.city = "Redmond";

var education = {
	"school" : "University of Michigan",
	"years" : "4",
	"city" : "Ann Arbor"
}

$("#header").append(work["position"]);
$("#header").append(education.school);


/* keep the practice items below this comment */

// practice array

var skills =
	["awesomeness", "programming", "teaching", "JS"]

// practice object

var bio = {
	"name" : "Jeffrey",
	"role" : "Web Developer",
	"contactInfo" : {
		"mobile" : "206-555-5555",
		"email" : "jef.k@me.com",
		"github" : "jeffkalmanek",
		"location" : "here"
	},
	"welcomeMessage" : "Hi There! ",
	"skills" : skills,
	"picture" : "images/app_logo_2_w320px.jpg"
};

console.log(bio);

bio.city = "Seattle";

$("#header").append(bio.welcomeMessage);
$("#header").append(bio.city);

// $("#main").append("Jeffrey Kalmanek");

// [string].replace([old],[new])

var email = "Jeffrey.Kalmanek@mac.com";

var newEmail =
	email.replace("mac", "icloud");

console.log(email);
console.log(newEmail);

var x = 299792458;
var y = 100;
var z = 1000000000;
var speed = x*100/z;
console.log(speed);

var awesomeThoughts = "I am jeff and I am awesome"
		console.log(awesomeThoughts)

var funThoughts = awesomeThoughts.replace("awesome", "fun");

// $("#main").append(funThoughts);
// console.log(funThoughts);

// disappointed that this was not acceptable for the quiz
// it works because the function in parantheses is computed first
var alpha = [5, 6, 7];

var alphaNumeric = alpha.concat(alpha.pop() + 2);

console.log(alphaNumeric);
// Result: ['a', 'b', 'c', 1, 2, 3]

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'