import React, {
  useContext
} from "react";
import {
  ThemeContext
} from "../context/notes/NoteContext.js";
import "../App.css";

const About = () => {
  const myData = [{
    id: 0,
    title: "About App",
    content: (
      <>
        <p>
          This is a <b>Note-Keeping App</b> that allows you to securely create, read, update, and delete notes.
          It uses <b>JWT authentication</b> and offers a smooth UI with <strong>real-time updates</strong>.
        </p>
        <ul>
          <li>Secure authentication with <b>JWT tokens</b></li>
          <li>Data storage using <b>MongoDB Atlas</b></li>
          <li>Responsive UI with <b>React.js</b></li>
        </ul>
      </>
    )
  },
    {
      id: 1,
      title: "Technologies Used",
      content: (
        <>
          <ul>
            <li><strong>M:</strong> <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a> - A Database</li>
            <li><strong>E:</strong> <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express.js</a> - Backend framework for Node.js</li>
            <li><strong>R:</strong> <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React.js</a> - Frontend library for building UI</li>
            <li><strong>N:</strong> <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> - Server-side JavaScript runtime</li>
          </ul>

          <p>
            Additional Libraries:
          </p>
          <ul>
            <li><b>Bootstrap</b> for styling and responsive design</li>
            <li><b>Fetch API</b> for making HTTP requests</li>
            <li><b>Font Awesome</b> for icons</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      title: "Features",
      content: (
        <>
          <ul>
            <li><b>User Authentication:</b> Secure login and registration with JWT</li>
            <li><b>CRUD Operations:</b> Create, read, update, and delete notes</li>
            <li><b>Search & Filter:</b> Quickly find specific notes</li>
            <li><b>Responsive Design:</b> Mobile-friendly UI</li>
          </ul>
        </>
      )
    },
    {
      id: 3,
      title: "Contact me",
      content: (
        <>
          <ul>
            <li><strong>Name:</strong> Anshu Gupta</li>
            <li><strong>Email:</strong> <i>anshuguptacell@gmail.com</i></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/anshugupta-cell" target="_blank" rel="noopener noreferrer">Anshu's GitHub</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          </ul>
        </>
      )
    }];

  const themeContext = useContext(ThemeContext);
  const {
    theme
  } = themeContext

  return (
    <div className="accordion my-3 br-1" id="accordionPanelsStayOpenExample">
      {myData.map((item, index) => (
        <div className={`accordion-item ${theme}-primary b-1`}key={item.id}>
          <h2 className="accordion-header">
            <button className={`accordion-btn collapsed bg-${theme}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded="false"
              aria-controls={`collapse-${index}`}>
              {item.title}
              <i class="fa-solid fs-5 fa-angle-down"></i>
            </button>
          </h2>
          <div id={`collapse-${index}`} className="accordion-collapse collapse">
            <div className={`accordion-body ${theme}-primary`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;