// Project 2 submission by Jeffrey Kalmanek

/* bio object */

var bio = {
	"name": "Jeffrey Kalmanek",
	"role": "Web Developer",
	"welcomeMessage": "Let Me Work for You!",
	"contacts" : {
		"mobile": "206-555-5555",
		"email": "jef.k@icloud.com",
		"github": "jeffkalmanek",
		"location": "Seattle"
	},
	"skills": ["product management", "sailing", "archery"],
	"bioPic": "images/jake_profile_pic_120px_square.jpg"
}

/* education object */

var education = {
	"schools": [
		{
			"name": "University of Washington",
			"location": "Bothell, Washington",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": "Sept 1999 - Aug 2001"
		},
		{
			"name": "University of Michigan",
			"location": "Ann Arbor, Michigan",
			"degree": "Bachelors of Science - Engineering",
			"majors": ["Computer Engineering"],
			"dates": "Sept 1985 - Dec 1989"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "July 2015 - Present",
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
			"dates": "Dec - 2011 to Present",
			"description": "working on CSAB and CE"
		},
		{
			"employer": "AOL",
			"title": "Product Manager",
			"location": "Seattle",
			"dates": "March - 2000 to Dec - 2005",
			"description": "Mobile Instant Messaging"
		}
	]
}

/* projects object */

var portfolio = {
	"projects": [
		{
			"title": "Build a Portfolio Web Site",
			"dates": "Aug - 2015",
			"description": "a web site to show off my projects",
			"images": ["images/app_logo_1_w320px.jpg"]
		},
		{
			"title": "Build a Resume Web Site",
			"dates": "Sept - 2015",
			"description": "a web site to show off my resume",
			"images": ["images/app_logo_2_w320px.jpg"]
		}
	]

}

/* taking out the old bio display code

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	/* showing that an extra variable isn't needed */
	/* also chanced from using the defined variable at the top of "name"
	* and used the "bio object", but forgot how to use the notation.  Use "dot" notation
	* but also remember that the code taking action has to be after the code defining the object */

/* also taking out the old bio display code
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.github));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	/* the above probably works better with a loop and uses
	 * a nested ID between "header" and "skills"
};
*/

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage).append(formattedMessage);
	$("#header").append(HTMLskillsStart);

	$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

	for(var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	};
};

bio.display();

work.display = function () {

	for (var job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	};
};

work.display();

portfolio.display = function () {
	for (var project in portfolio.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", portfolio.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", portfolio.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", portfolio.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (portfolio.projects[project].images.length > 0) {
			for (image in portfolio.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", portfolio.projects[project]
					.images[image]);
				$(".project-entry:last").append(formattedImage);
			};
		};
	};
};

portfolio.display();

education.display = function () {
	for (var school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

	};
};

education.display();

/* putting in the map */

$("#mapDiv").append(googleMap);

