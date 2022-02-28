import React from 'react';
import imgSteve from '../images/sk_1.jpg'
import Email from '../images/gmail_logo.png'
import LinkedIn from '../images/LinkedIn_logo_.png'
import GitHub from '../images/github-logo1.jpg'
import Resume from '../images/resumeimg.PNG'
import ResumePdf from '../images/SK_Res_1.pdf'
import ReviewCore from '../images/reviewcore1.jpg'
import WorkDaySched from '../images/WordDaySched_1.jpg'
import NoteTaker from '../images/notetaker1.jpg'
import Barker from '../images/Barker_1.jpg'
import TechBlog from '../images/tech1.jpg'
import EmployeeTracker from '../images/EmpTrack1.PNG'



export default function About() {
  return (
    <>
      <h1>About Me</h1>
    <div className='aboutMe'>
      
      <a className='myPicture'><img src={imgSteve} width='100%' height="50%" ></img></a>
      <p class= 'px-5'>
      Junior Full Stack Web Developer with an interest in front-end and back-end development. My background in project management and retail has instilled an unparalleled work ethic and a history of providing stellar customer service. I am proficient in the theory and application of web development, and knowledgeable of a variety of computer languages, including HTML, CSS, JavaScript, Node.js, and React. As a recent graduate of the Rutgers University Full Stack Coding Boot Camp, I excel at working with a team and demonstrate strong leadership skills. I am driven to continue learning development languages and reach my long-term goal of becoming a game developer. 
      </p>
    </div>

      <div class="gallery">
        <h1>Portfolio</h1>
        <p>Here is the gallery of work that I have done or been apart of.</p>

        <a className='reviewCore'
          href="https://review-core.herokuapp.com/">
          <img src={ReviewCore} width='40%' height="40%" ></img>
        </a>

        <a className='barker'
          href="https://stevekoutsodontis.github.io/Barker/">
          <img src={Barker} width='40%' height="40%"/>
        </a>

        <a className='noteTaker'
          href="https://note-taker-smk.herokuapp.com/">
          <img src={NoteTaker} width='40%' height="40%" />
        </a>

        <a className='workDaySched'
          href="https://stevekoutsodontis.github.io/Work-Day-Scheduler/">
          <img src={WorkDaySched} width='40%' height="40%"></img>
        </a>
        <a className='techBlog'
          href="https://tech-blog-smk.herokuapp.com/">
          <img src={TechBlog} width='40%' height="40%" />
        </a>

        <a className='employeeTracker'
          href="https://github.com/SteveKoutsodontis/Employee-Tracker">
          <img src={EmployeeTracker} width='34%' height="30%"></img>
        </a>

      </div>

      <div class="contact">
        <h1>Contact Info</h1>
        <p class='px-5'>
          If you have any questions please do not hesistate to contact me at any of the links below. Through these links you will be able to Email, Check my Github, My LinkedIn and also download a copy of my resume. Thank you for checking out my portfolio!
        </p>
        
        <a className='contactEmail'
          href="mailto:skoutsodontis@gmail.com">
          <img src={Email} />
        </a>

        <a className='contactLinkedIn'
          href="https://www.linkedin.com/in/steve-koutsodontis-937264127">
          <img src={LinkedIn}></img>
        </a>

        <a className='contactGitHub'
          href="https://github.com/SteveKoutsodontis">
          <img src={GitHub}></img>
        </a>
        <a className='contactResume' href={ResumePdf} download>
          <img src={Resume} width="204" height="242"></img>
        </a>

      </div></>
  );
}



