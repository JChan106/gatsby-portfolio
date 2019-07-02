import React from 'react';

export default [
  {
    title: 'About',
    detail: (
      <>
        <div>About Me</div>
          <ul>
            <li>Hi! I am a full stack software engineer with a passion for building web applications. I also enjoy playing basketball, gaming, and fashion. Here is a quote
            that I follow from one of my favorite actors: <br/>
            <i>"Don't try to be like Jackie. There is only one Jackie. Study computers instead."<br/>-Jackie Chan, Actor</i>
            </li>
          </ul>
        <div>Education</div>
        <ul>
          <li> University of California, Riverside </li>
           <ul>
            <li>B.S. Computer Science</li>
            <li>Graduated June 2018</li>
          </ul>
        </ul>
      </>
    ),
    key: 1,
  },
  {
    title:'Skills',
    detail: (
      <>
        <div>Languages</div>
        <ul>
          <li>Javascript / Typescript</li>
          <li>C#</li>
          <li>C++</li>
          <li>Terraform</li>
          <li>Bash</li>
          <li>SQL</li>
          <li>Excel VBA</li>
        </ul>
        <div>Frameworks and Libraries</div>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Gatsby</li>
          <li>Sass</li>
          <li>Styled Components</li>
        </ul>
        <div>Other</div>
        <ul>
          <li>AWS</li>
          <li>Git</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Unity</li>
        </ul>
        <div>Coursework</div>
        <ul>
          <li>Object Oriented Programming</li>
          <li>Data Structures and Algorithms</li>
          <li>Information Retrieval</li>
          <li>Embedded Systems</li>
          <li>Databade Management Systems</li>
        </ul>
      </>
    ),
    key: 2,
  },
  {
    title:'Projects',
    detail: (
      <>
        <div><img src='https://i.imgur.com/k3OP6Kf.gif' alt="DoodlyDoo" width="80" height="125"/>DoodlyDoo</div>
        <ul>
          <li>Created an appointment app, which allows users to plan events.</li>
          <li>Main features include a friends list, user permissions of who they can invite, commenting section of appointments, and more.</li>
          <li>Built using React Native, Redux, Firebase, and Bootstrap.</li>
        </ul>
        <div><img src='https://i.imgur.com/rMnXxkj.gif' alt="PostPin" width="125" height="125"/>PostPin</div>
        <ul>
          <li>Created a Multi-page web app which provides College students a platform to Buy/Sell/Trade</li>
          <li> Made using good practices: collaborators made pull requests, Kanban board to organize tasks, weekly meetings</li>
          <li>Built using: ReactJS, Sass, Bootstrap, Firebase</li>
        </ul>
        <div className='title'>LED Game</div>
        <ul>
          <li>Created an asteroid dodging game on a 32x32 LED Board</li>
          <li>Used USART communication between the Arduino and Atmega</li>
          <li>Built using: Arduino, Atmega1284, LCD Screen for the score, 32x32 LED Board for display, and joystick for movement</li>
        </ul>
        <div className='title'>Tanks</div>
        <ul>
          <li>Created a 2 player real-time tank game using Unity and EA Pathfinders API</li>
          <li>Made during Hackpoly 2016, won the EA Pathfinders prize</li>
          <li>The EA Pathfinders API allowed us to use a smartphone as a controller for the game</li>
        </ul>
      </>
    ),
    key: 3,
  },
  {
    title:'Experience',
    detail: (
      <>
        <div>Kelley Blue Book - Full Stack Software Engineer</div>
          <ul>
            <li>Worked in a scrum team which developed consumer facing applications for the automotive industry.</li>
            <li>Created user interfaces, APIs, and Terraform to build the infrastructure of our applications.</li>
            <li>Decomposed a monolith into micro-services while adding additional functionality to each of the applications.</li>
          </ul>
        <div>Center for Environmental Research and Technology</div>
          <ul>
            <li>Managed the solar energy website which uses PHP and SQL</li>
            <li>Reduced workload for researchers by creating Excel VBA Macros</li>
            <li>Excel VBA Macros transferred and analyzed energy data and made multiple graphs and calculations from it</li>
          </ul>
      </>
    ),
    key: 4,
  }
]
