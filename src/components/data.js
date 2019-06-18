import React from 'react';

export default [
  {
    title: 'About',
    detail: (
      <>
        <div className='title'>About Me</div>
          <ul>
            <li>Hi! I am a full stack software engineer with a passion for building web applications. I also enjoy playing basketball, gaming, and buying clothes. Here is a quote
            that I follow from one of my favorite actors: <br/>
            <i>"Don't try to be like Jackie. There is only one Jackie. Study computers instead."<br/>-Jackie Chan, Actor</i>
            </li>
          </ul>
        <div className='title'>Education</div>
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
        <div className='title'>Languages</div>
        <ul>
          <li>Javascript / Typescript</li>
          <li>C#</li>
          <li>C++</li>
          <li>SQL</li>
          <li>Excel VBA</li>
        </ul>
        <div className='title'>Frameworks and Libraries</div>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>JQuery</li>
          <li>Sass</li>
        </ul>
        <div className='title'>Other</div>
        <ul>
          <li>Git</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Unity</li>
        </ul>
        <div className='title'>Coursework</div>
        <ul>
          <li>Object Oriented Programming</li>
          <li>Data Structures and Algorithms</li>
          <li>Machine Learning</li>
          <li>Software Engineering</li>
        </ul>
      </>
    ),
    key: 2,
  },
  {
    title:'Projects',
    detail: (
      <>
        <div className='title'><img className='gifs' src='https://i.imgur.com/k3OP6Kf.gif' alt="DoodlyDoo" width="80" height="125"/>DoodlyDoo</div>
        <ul>
          <li>Created an appointment app, which allows users to plan events.</li>
          <li>Main features include a friends list, user permissions of who they can invite, commenting section of appointments, and more.</li>
          <li>Built using React Native, Redux, Firebase, and Bootstrap.</li>
        </ul>
        <div className='title'><img className='gifs' src='https://i.imgur.com/rMnXxkj.gif' alt="PostPin" width="125" height="125"/>PostPin</div>
        <ul>
          <li>Created a Multi-page web app which provides College students a platform to Buy/Sell/Trade</li>
          <li> Made using good practices: collaborators made pull requests, Kanban board to organize tasks, weekly meetings</li>
          <li>Built using: ReactJS, Sass, Bootstrap, Firebase, and Webpack</li>
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
        <div className='title'>Center for Environmental Research and Technology</div>
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
