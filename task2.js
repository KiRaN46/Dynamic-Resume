//Card Section

var body=document.getElementById("kiran");

var card3=document.createElement("section");
card3.setAttribute("class","card");
body.appendChild(card3);

var main=document.createElement("section");
main.setAttribute("class","main");
card3.appendChild(main);

var image=document.createElement("img");
image.src="Kiran.JPG";
image.alt="profile image";
image.setAttribute("class","profile");
main.appendChild(image);

var names=document.createElement("h3");
names.textContent="Anu Kiran";
names.setAttribute("class","names");
main.appendChild(names);

var hr=document.createElement("hr");
hr.setAttribute("class","hr");
card3.appendChild(hr);

var main1=document.createElement("section");
main1.setAttribute("class","main1");
card3.appendChild(main1);

var email=document.createElement("h3");
email.textContent="anukiran1232@gmail.com";
email.setAttribute("class","data");
main1.appendChild(email);

var mobile=document.createElement("h3");
mobile.textContent="8185942742";
mobile.setAttribute("class","data");
main1.appendChild(mobile);

var address=document.createElement("h3");
address.textContent="Machilipatnam,Krishna Dist.";
address.setAttribute("class","data");
main1.appendChild(address);


//Resume Section

var resume=document.createElement("section");
resume.setAttribute("class","resume");
body.appendChild(resume);

var head=document.createElement("h1");
head.setAttribute("class","head");
head.textContent="Resume";
resume.appendChild(head);

resume.appendChild(document.createElement("hr"));

var objective=document.createElement("h2");
objective.textContent=" Objective :";
resume.appendChild(objective);

var matter=document.createElement("h3");
matter.setAttribute("class","matter");
matter.textContent="Seeking a position to utilize my skills and abilities in an esteemed organization and to work for the upliftment of the organization.";
resume.appendChild(matter);

resume.appendChild(document.createElement("hr"));

var personal=document.createElement("h2");
personal.textContent=" Personal Details :";
resume.appendChild(personal);

var ul=document.createElement("ul");
ul.setAttribute("class","personaldetails")
resume.appendChild(ul);

var personalname=document.createElement("li");
personalname.textContent="Name : K Anu Kiran";
ul.appendChild(personalname);


var personaladdress=document.createElement("li");
personaladdress.textContent="Address : Machilipatnam , Bandar Mandal, Krishna District, 521001.";
ul.appendChild(personaladdress);

var personalage=document.createElement("li");
personalage.textContent="Age: 20 Years";
ul.appendChild(personalage);

var personalgender=document.createElement("li");
personalgender.textContent="Gender : Male";
ul.appendChild(personalgender);

var personalnation=document.createElement("li");
personalnation.textContent="Nationality : Indian";
ul.appendChild(personalnation);

var personallanguage=document.createElement("li");
personallanguage.textContent="Languages Known : English, Telugu, Hindi";
ul.appendChild(personallanguage);

resume.appendChild(document.createElement("hr"));


var education=document.createElement("h2");
education.textContent="Education :";
resume.appendChild(education);

var edu=document.createElement("ol");
edu.setAttribute("class","edu");
resume.appendChild(edu);

var ssc=document.createElement("li");
ssc.textContent="SSC : Bhashyam School";
edu.appendChild(ssc);

var ssc=document.createElement("li");
ssc.textContent="Diploma : 	A.A.N.M & V.V.R.S.R polytechnic";
edu.appendChild(ssc);

var ssc=document.createElement("li");
ssc.textContent="Engineering :	JNTUK,kakinada";
edu.appendChild(ssc);

resume.appendChild(document.createElement("hr"));

var skill=document.createElement("h2");
skill.textContent="Skills :"
resume.appendChild(skill);

var skills=document.createElement("ul");
skills.setAttribute("class","skills");
resume.appendChild(skills);

var sk=document.createElement("li")
sk.textContent="c,c++,Java,Python";
skills.appendChild(sk);

var ski=document.createElement("li");
ski.textContent="Web Designing using HTML,CSS,bootstrap,React"
skills.appendChild(ski);

var skil=document.createElement("li");
skil.textContent="Competative coding";
skills.appendChild(skil);