import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App4.css'
import Port from './portfolio'






function App() {


  return (
    <>
    <div>
        <nav class="navbar">
            <ul class="list">
                <li><a href="#">About Me</a></li>
                <li><a href='#'>My Achievements</a></li>
                <li><a href='#'>Contact Me</a></li>
            </ul>
        </nav>
    </div>
    <div class='one'>
    <h1>I'M A <br></br>WEB DEVELOPER</h1>
    </div>
    <div class='intro'>
        <center>
        <Port Image='chinttuu.jpg'/>
        <button>About Me</button>
        </center>
        <p class='para'>Hello! I'm Gurajala Sathwik Reddy, a web developer with a strong passion for designing and building engaging, responsive, and efficient web applications. I specialize in front-end development using React.js, HTML, CSS, and JavaScript, and I enjoy turning ideas into functional and visually appealing digital experiences.

I love exploring the latest technologies, improving performance, and focusing on clean, maintainable code. Whether it's building dynamic user interfaces or solving real-world problems through code, I’m always eager to learn and grow as a developer.

Outside of coding, I enjoy exploring tech trends, watching movies, and constantly challenging myself to learn something new every day.</p>
    </div>
    <div class='skills'>
        <center>
        <button>Skills</button>
        <p>I enjoy diving into new things. Here are the list of skills that I've learned and worked with</p>
        <table>
            <tr>
                <td>
                    Python 
                    
                </td>
            </tr>
            <tr>
                <td>
                Java
                </td>
            </tr>
            <tr><td>C</td></tr>
            <tr><td>C++</td></tr>
            <tr><td>FUll Stack Web Development</td></tr>
            <tr><td>MySQL</td></tr>
            <tr><td>AWS</td></tr> 
        </table>
        </center>
    </div>
    <div class='work'>
        <center>
        <button>Check Out Some of My Work</button>
        <br></br>
        <a href='http://127.0.0.1:8000/'>Team India  using Django</a>
        <br></br>
        <a href='http://localhost:5174/'>Indexes</a>
        <br></br>
        <a href='http://localhost:5174/'>Movies List using Props React Js</a>
        </center>
        </div>
        <div>
                <center>
                <button>😊FEEL FREE TO COLLAB WITH ME</button>
                

                </center>
        </div>
    </>
 );
}
export default App