import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  leaders = [
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Han Phan",
      text: "Dr. Phan is our Head of Research and Principal Investigator, meaning she is the brains and heart behind RDR.  She is a board certified Pediatric Neurologist and loves making a difference in her patients’ lives.  Dr. Phan and her husband have two daughters and a son, so it’s safe to say she’s pretty busy.  In her spare time, she enjoys vacationing, experiencing new places, and trying new foods. "
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Tim Nguyen",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Trang Vo",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  nurses = [
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Lindsay Pare",
      text: "Lindsay Pare received her Nurse Practitioner degree from the University of Alabama at Birmingham, but her true alliance lies with Clemson, where she received her undergraduate degree.  She is originally from Boston, and occasionally you can hear her Boston accent come out.  Lindsay enjoys the relationships she’s built here at RDR and looks forward to her patients’ visits and making a difference in their lives.  In her spare time, you can find her hopping on a flight to her next travel destination.  Her favorite trips thus far have been to Israel and Joshua Tree, California. "
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Meg Hudspeth",
      text: "Meg Hudspeth is one of our Nurse Practitioners here at RDR. She grew up in the Atlanta area and obtained her Bachelor’s degree from the University of Georgia (go Dawgs!). She went on to attend Augusta University where she received her Master’s in Nursing and her Doctor of Nursing Practice degrees.  Meg comes from Children’s Healthcare of Atlanta and brings extensive knowledge of pediatric care to the clinic. Now with RDR, she is excited about the potential for clinical research and the profound impacts it can have on patients’ lives. In her free time, Meg enjoys going to the lake, biking, antiquing, and spending time with her Siamese cats, Tj and Maxx. "
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Kallie Platt",
      text: "Kallie Platt is one of our three Nurse Practitioners at RDR.  She is an Atlanta native, and attended the University of Georgia, Medical College of Georgia, and Emory University for her nursing degrees.  She previously worked as a Registered Nurse at Children's Healthcare of Atlanta for over seven years. Kallie is excited to begin her career in clinical research and have the opportunity to cause positive change in her patients' lives.  When not at work, Kallie enjoys spending time with her husband,  traveling, trying new restaurants, going on hikes, and cheering on the Georgia Bulldogs.  "
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Genevieve Wilson",
      text: "Genevieve Wilson is one of three Research Team Leads at RDR and Program Director of the Phan Institute for Clinical Research, which offers unique, hands-on training for budding clinical research professionals. Genevieve graduated summa cum laude with a degree in neuroscience from Emory University. She previously worked in a human genetics laboratory to study galanin, a chemical messenger that may help protect neurons from damage in the context of neurodegenerative disease. At RDR, learning about and connecting with her patients brings her joy, and she is filled with gratitude for their contributions to this important research. In her free time, Genevieve's interests include learning new languages, international travel, and following a plant-based lifestyle."
    },
  ]

  clinic = [
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Marcial Almaraz",
      text: "Marcial Almaraz is the jack of all trades at RDR.  He is one of our Senior Clinical Research Coordinators, as well as Pharmacy Technician, and Regulatory Specialist.  He loves the work he does at RDR, and is even working on bringing his adorable 4 year old daughter, Sophia, onto the team as our full-time motivational speaker.  Marcial loves spending time with his family outside of work, and he and his wife are excited to be welcoming their second child this summer."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Deanna Baker",
      text: "Deanna Baker, originally from Savannah, Georgia, is one of our Senior Clinical Research Coordinators.  She is a great leader and an incredibly hard worker when it comes to her research studies.  Deanna chose research because she loves that it gives her the opportunity to constantly grow and learn.  After hours, Deanna can be found spending time with her husband, family, and friends.  She also loves trying new restaurants and all things Disney."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Jona Comix",
      text: "Jona Comix is one of our Clinical Research Coordinators as well as Pharmacy Technician and Regulatory Specialist.  He, like his brother-in-law, Marcial, does a little bit of everything at RDR.  Jona is originally from Veracruz, Mexico, and is currently working on completing his Nursing Degree.  Jona is an avid reader and particularly loves Korean Manhwa, Japanese Manga, and Light Novels of the Fantasy Genre."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Brenda Almaras",
      text: "Brenda Almaras is one of our hard-working Clinical Research Coordinators.  She came to RDR with a few years of undergraduate research experience, and has quickly become one of our top coordinators.  Brenda has an undergraduate degree in psychology, and is currently working on a second degree in Biology. She has a special interest in mental health, and her goal is to become a psychiatrist. In her spare time, she loves spending time with her friends and family as well as participating in traditional cultural performances within her community."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Lisa Glasford",
      text: "Lisa Glasford, one of our Clinical Research Assistants, joins our team after several years of working with the Infectious Disease Specialists of Atlanta.  She is a true New Yorker, growing up in the Bronx, but she has quickly adapted to the Southern way of life.. In her time off, Lisa enjoys reading, doing arts and crafts, and singing karaoke."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Ibaad Khan",
      text: "Ibaad Khan is a recent addition to the RDR family and already feels a part of the team. Originally from Georgia,  Ibaad grew up in Gwinnett, and attended Emory University for his undergraduate degree.  Ibaad plans to one day attend medical school and become a physician and treat people with disabilities.  Outside of work you can catch him at the gym or volunteering to help and mentor adults with autism."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Christian Hanson",
      text: "Christian Hanson is one of the research assistants and a CPhT in the Pharmacy team at RDR.  He is a native of Sierra Leone, and attended the University of Sierra Leone, College of Medicine and Allied Health Sciences, and China Pharmaceutical University where he earned Bachelor of Pharmacy (Hons) and MSC in Pharmacology respectively.  He previously worked for the Pharmacy Board of Sierra Leone, WellStar, and Emory Healthcare pharmacy departments. Christian has vast experience in preclinical and clinical pharmacy research and is excited to start a career in rare disease clinical research. Chris is thankful to be part of a team that brings smiles to the faces of both his patients and their families. Christian enjoys watching sports, traveling, working out and listening to the news in his free time. He speaks mandarin and several African languages."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Amber Rayo",
      text: "Amber Rayo, one of our new Clinical Research Assistants, is originally from Trinidad, but grew up in New York. She attended Molloy College in Long Island for her undergraduate degree. After that, she attended medical school in Aruba and Davenport University in Michigan for her MBA. In 2006, she moved to Atlanta and has lived here ever since. Amber is excited to join this new team and help the pediatric population which she adores. Amber is not new to the medical field, having worked in neurology, urology, bariatrics, surgery, primary care, and urgent care specialties. She has published papers in neurology and loves to write. When not working, she enjoys hiking, resorts and traveling, and adores her fur baby, baking, and cooking."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Donna Spaulding",
      text: "Donna Spaulding has recently joined the RDR team and is the first face you see when you walk through our doors.  Donna has years of patient care and customer service experience from working at Children’s Healthcare of Atlanta.  She is an Atlanta native and a true fan of the Atlanta Falcons, regardless of the game outcome.  Though she loves her receptionist title, she says Grandma is the best title she’ll ever have, and loves spending time with her two grandsons."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Jessica Williams",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  admin = [
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Jennifer Griffin",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Jessica Drury",
      text: "A Georgia native, Jessica went to Georgia State University for her undergraduate, getting a Bachelor’s degree in Interior Design. Since college, she has worked in different fields, mostly in customer facing positions but has maintained freelance work in graphic design. As the resident creative, she hopes to bring her organizational and design skills to RDR while building on her passion for supporting the team and patients. Outside of work, Jessica enjoys a myriad of different creative pursuits like crafting costumes and decor, and writing fictional tales with her friends through games."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Steven Nguyen",
      text: "Steven was born and raised here in Atlanta, Georgia and has a Bachelor’s degree in Computer Science. He chose to take a job with a clinical research company because it allowed him to satisfy his curiosity about the medical field while also working on improving his coding skills for his career. In his free time Steven enjoys  cooking and training in and researching martial arts."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Alvin Nguyen",
      text: "Alvin was born and raised in Atlanta, Georgia.  He wanted to get involved in clinical research to see if there was anything he could do to aid in the research of rare diseases.  Mental health is extremely important to Alvin.  In his spare time, he enjoys working out and traveling whenever possible."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Olga Tenyuta",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Miro Pastrnak",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
