/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* I'm leaving these four lines below to continue my experimentation.
* But the code that manipulates index.html needs to go after the object/variable definitions
*/

var name = "Jeffrey K"; /* these values are different than the object values */
var role = "Web Guy"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

/* bio object */

var bio = {
	"name": "Jeffrey Kalmanek",
	"role": "Web Developer",
	"welcomeMessage": "Hi There! ",
	"contacts" : {
		"mobile": "206-555-5555",
		"email": "jef.k@icloud.com",
		"github": "jeffkalmanek"
	},
	"skills": ["product management", "sailing", "archery"],
	"biopic": "app_logo_2_w320px.jpg"
}

/* education object */

var education = {
	"schools": [
		{
			"name": "University of Washington",
			"location": "Bothell, Washington",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2001,
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		}
	]
}

/* work object */

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Principal Product Development Engineer",
			"location": "Redmond",
			"dates": 2015,
			"description": "working on CSAB and CE"
		}
	]
}

/* projects object */

var portfolio = {
	"projects": [
		{
			"title": "Build a Portfolio Web Site",
			"dates": 2015,
			"description": "a web site to show off my projects",
			"images": ["https://github.com/jeffkalmanek/Project_1"]
		}
	]

}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	/* showing that an extra variable isn't needed */
	/* also chanced from using the defined variable at the top of "name"
	* and used the "bio object", but forgot how to use the notation.  Use "dot" notation
	* but also remember that the code taking action has to be after the code defining the object */

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	/* the above probably works better with a loop */
};

for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

};

/* keep the practice items below this comment */
/*
 */
/* for loop example
 * for(var i = 0; i < 9; i++) { console.log("goo", i); }
 */

/* function to find < > characters and escape them, the g makes it global? */

//var charEscape = function(_html) {
//    var newHTML = _html;
//
//    newHTML = _html.replace(/</g, "&lt;");
//    newHTML = newHTML.replace(/>/g, "&gt;");
//
//    return newHTML;
//};

//work.employer = "AT&T";
//work.years = "5";
//work.city = "Redmond";

//var education = {
//	"school" : "University of Michigan",
//	"years" : "4",
//	"city" : "Ann Arbor"
//}

//$("#header").append(work["position"]);
//$("#header").append(education.school);


// practice array

//var skills =
//	["awesomeness", "programming", "teaching", "JS"]

// practice object

//var bio = {
//	"name" : "Jeffrey",
//	"role" : "Web Developer",
//	"contactInfo" : {
//		"mobile" : "206-555-5555",
//		"email" : "jef.k@me.com",
//		"github" : "jeffkalmanek",
//		"location" : "here"
//	},
//	"welcomeMessage" : "Hi There! ",
//	"skills" : skills,
//	"picture" : "images/app_logo_2_w320px.jpg"
//};

//console.log(bio);

//bio.city = "Seattle";

//$("#header").append(bio.welcomeMessage);
//$("#header").append(bio.city);

// $("#main").append("Jeffrey Kalmanek");

// [string].replace([old],[new])

//var email = "Jeffrey.Kalmanek@mac.com";

//var newEmail =
//	email.replace("mac", "icloud");

//console.log(email);
//console.log(newEmail);

//var x = 299792458;
//var y = 100;
//var z = 1000000000;
//var speed = x*100/z;
//console.log(speed);

//var awesomeThoughts = "I am jeff and I am awesome"
//		console.log(awesomeThoughts)

//var funThoughts = awesomeThoughts.replace("awesome", "fun");

// $("#main").append(funThoughts);
// console.log(funThoughts);

// disappointed that this was not acceptable for the quiz
// it works because the function in parantheses is computed first
//var alpha = [5, 6, 7];

//var alphaNumeric = alpha.concat(alpha.pop() + 2);

//console.log(alphaNumeric);
// Result: ['a', 'b', 'c', 1, 2, 3]

//var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

//console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

//var popped = myFish.pop();

//console.log(myFish); // ['angel', 'clown', 'mandarin' ]

//console.log(popped); // 'sturgeon'