import { useState, useEffect } from "react";
import recycleIcon from "./recycleicon.png";
import computer from "./computer.webp";
import email from "./email.png";
import fileicon from "./fileicon.png";
import frogicon from "./frogicon.jpg";
import githubIcon from "./githubicon.png";
import whatsappIcon from "./whatsappicon.webp";
import goofycat from "./goofycat.jpg";
import linkedinIcon from "./linkedinicon.webp";
import windowsIcon from "./windowsicon.png";
import "./App.css";
function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [isFullScreen2, setIsFullScreen2] = useState(false);

  const [time, setTime] = useState(new Date());

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showLoader ? (
        <div className="loader">
          <div id="ghost">
            <div id="red">
              <div id="pupil"></div>
              <div id="pupil1"></div>
              <div id="eye"></div>
              <div id="eye1"></div>
              <div id="top0"></div>
              <div id="top1"></div>
              <div id="top2"></div>
              <div id="top3"></div>
              <div id="top4"></div>
              <div id="st0"></div>
              <div id="st1"></div>
              <div id="st2"></div>
              <div id="st3"></div>
              <div id="st4"></div>
              <div id="st5"></div>
              <div id="an1"></div>
              <div id="an2"></div>
              <div id="an3"></div>
              <div id="an4"></div>
              <div id="an5"></div>
              <div id="an6"></div>
              <div id="an7"></div>
              <div id="an8"></div>
              <div id="an9"></div>
              <div id="an10"></div>
              <div id="an11"></div>
              <div id="an12"></div>
              <div id="an13"></div>
              <div id="an14"></div>
              <div id="an15"></div>
              <div id="an16"></div>
              <div id="an17"></div>
              <div id="an18"></div>
            </div>
            <div id="shadow"></div>
          </div>

          <h2 className="line">Welcome to Mosh OS...</h2>

          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="body">
          <div className="container">
            <div>
              <img className="comp" src={computer} alt="computer icon" />
              <h4 className="caption1">This PC</h4>
            </div>

            <div>
              <img className="recycle" src={recycleIcon} alt="computer icon" />
              <h4 className="caption2">Recycle</h4>
            </div>

            <div className="div">
              <a
                href="mailto:mohitog009@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="email" src={email} alt="email icon" />
              </a>
              <h4 className="caption">Email</h4>
            </div>

            <div className="div">
              <a
                href="https://wa.me/+918000454743?text=hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="whatsapp" src={whatsappIcon} alt="icon" />
              </a>
              <h4 className="caption">WhatsApp</h4>
            </div>

            <div className="div">
              <a
                href="https://github.com/mohitog2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="github" src={githubIcon} alt="github icon" />
              </a>
              <h4 className="caption">Github</h4>
            </div>

            <div className="div">
              <img
                className="cat"
                src={goofycat}
                alt="cat"
                onClick={() => setIsFullScreen(true)}
              />
              <h4 className="caption">Cat</h4>
            </div>

            {isFullScreen && (
              <div className="overlay" onClick={() => setIsFullScreen(false)}>
                <div className="window" onClick={(e) => e.stopPropagation()}>
                  <div className="header">
                    <span>Image Viewer</span>
                    <button onClick={() => setIsFullScreen(false)}>X</button>
                  </div>
                  <img src={goofycat} alt="Full Size" className="full-image" />
                </div>
              </div>
            )}

            <div className="div">
              <a href="/resume.pdf" download>
                <img className="resume" src={fileicon} alt="resume" />
              </a>
              <h4 className="caption">Resume</h4>
            </div>

            <div className="div">
              <img
                className="frog"
                src={frogicon}
                alt="frog"
                onClick={() => setIsFullScreen2(true)}
              />
              <h4 className="caption">Froggy</h4>
            </div>

            {isFullScreen2 && (
              <div className="overlay" onClick={() => setIsFullScreen2(false)}>
                <div className="window" onClick={(e) => e.stopPropagation()}>
                  <div className="header">
                    <span>Image Viewer</span>
                    <button onClick={() => setIsFullScreen2(false)}>X</button>
                  </div>
                  <img src={frogicon} alt="Full Size" className="full-image" />
                </div>
              </div>
            )}

            <div className="div">
              <a
                href="https://www.linkedin.com/in/mohit-sharma-8a9b6a2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="linkedin" src={linkedinIcon} alt="linkedin" />
              </a>
              <h4 className="caption">LinkedIn</h4>
            </div>

            <div className="div">
              <a
                href="https://mohitog2.github.io/Quotify/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i id="Quotify" class="fa-solid fa-q"></i>
              </a>
              <h4 className="caption">Quotify</h4>
            </div>

            <div className="div">
              <a
                href="https://mohitog2.github.io/Avatar-Generator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i id="avatar" class="fa-solid fa-a"></i>
              </a>
              <h4 className="caption">Avatar Gen.</h4>
            </div>
          </div>

          <div className="footer">
            <div className="taskbar">
              <button className="start-button">
                <img src={windowsIcon} alt="Start" />
                Start
              </button>
              <div className="task-area">
                <div className="task">My Computer</div>
                <div className="task">Notepad</div>
              </div>
              <div className="system-tray">
                <span className="clock">{time.toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
