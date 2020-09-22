import React from 'react';
import './TechTools.css';

function TechTools() {
  return (
    <React.Fragment>
      <div className='TechSection'>
        <p className='TechTitle'>Technology, software and tooling experience</p>
        <table>
          <ul>
            <li>HTML/CSS</li>
            <li>JAVASCRIPT/JQUERY</li>
            <li>CSS AND PREPROCESSING</li>
            <li>WORDPRESS</li>
            <li>FRAMEWORKS AND LIBRARIES</li>
            <li>VERSION CONTROL/GIT</li>
            <li>VSCODE, ATOM</li>
            <li>RESPONSIVE DESIGN</li>
            <li>TESTING/DEBUGGING</li>
            <li>BROWSER DEVELOPER TOOLS</li>
            <li>BUILDING AND AUTOMATION</li>
            <li>ANALYTICS AND SEO</li>
            <li>COMMAND LINE</li>
            <li>PHP AND MYSQL DATABASE</li>
            <li>REACT JS, WEBPACK, REDUX</li>
            <li>NPM, API's, SLACK</li>
            <li>
              ADOBE CC (Photoshop, illustrator, Lightroom, Indesign, XD, Premier
              Pro)
            </li>
          </ul>
        </table>
        <p className='OnlineCode'>
          Online coding courses: Udemy,
          <br />
          Edx, Free CodeCamp, Youtube, Codeacademy, etc.
        </p>
        <div className='WebDevBlock'>
          <p>
            I'm also a member of the Essex Web Developers monthly meetups.
            https://www.meetup.com/ EssexWebDevelopers/
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TechTools;
