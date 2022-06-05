import React from 'react'

const Raw = () => {
    return (
        <>

            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            {/* navbar  */}

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            {/* progress */}
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>


            {/* scroll */}
            #scrollspyHeading1




            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>


            {/* toast */}
            const toastElList = document.querySelectorAll('.toast')
            const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

            <form>
                <div className="mb-3">
                    <label for="selectToastPlacement">Toast placement</label>
                    <select className="form-select mt-2" id="selectToastPlacement">
                        <option value="" selected>Select a position...</option>
                        <option value="top-0 start-0">Top left</option>
                        <option value="top-0 start-50 translate-middle-x">Top center</option>
                        <option value="top-0 end-0">Top right</option>
                        <option value="top-50 start-0 translate-middle-y">Middle left</option>
                        <option value="top-50 start-50 translate-middle">Middle center</option>
                        <option value="top-50 end-0 translate-middle-y">Middle right</option>
                        <option value="bottom-0 start-0">Bottom left</option>
                        <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                        <option value="bottom-0 end-0">Bottom right</option>
                    </select>
                </div>
            </form>
            <div aria-live="polite" aria-atomic="true" className="bg-dark position-relative bd-example-toasts">
                <div className="toast-container p-3" id="toastPlacement">
                    <div className="toast">
                        <div className="toast-header">
                            <img src="..." className="rounded me-2" alt="...">
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                        </div>
                        <div className="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </div>


            {/* classes */}
            <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
            </p>

            <p className="placeholder-wave">
                <span className="placeholder col-12"></span>
            </p>


            {/* form  */}
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1">
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1">
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* navbar  */}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                </a>

                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"></use></svg>
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg>
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"></use></svg>
                            Customers
                        </a>
                    </li>
                </ul>
            </div>


            {/* sidebar  */}
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                    <span className="fs-4">Sidebar</span>
                </a>
                <hr>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                                Customers
                            </a>
                        </li>
                    </ul>
                    <hr>
                        <div className="dropdown">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2">
                                    <strong>mdo</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider"></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>


                    {/* footer  */}
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                            </a>
                            <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                        </ul>
                    </footer>

                    {/* img  */}
                    <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>

                </>
                )
}

                export default Raw


                {/* table  */}
                <dl className="row">
                    <dt className="col-sm-3">Description lists</dt>
                    <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                    <dt className="col-sm-3">Term</dt>
                    <dd className="col-sm-9">
                        <p>Definition for the term.</p>
                        <p>And some more placeholder definition text.</p>
                    </dd>

                    <dt className="col-sm-3">Another term</dt>
                    <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

                    <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                    <dd className="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                    <dt className="col-sm-3">Nesting</dt>
                    <dd className="col-sm-9">
                        <dl className="row">
                            <dt className="col-sm-4">Nested definition list</dt>
                            <dd className="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                        </dl>
                    </dd>
                </dl>



                import MyPDF from '../path/to/file.pdf';
                <a href={myPDF} download="My_File.pdf"> Download Here </a>


                import resume from '../assets/data/resume.pdf';

                <a href={resume} download="YourName resume.pdf"> Download CV </a>


                {/* badge  */}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                </span>


                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                </span>


                <p>
                    Insightful.
                    Professional.
                    Astute.
                    Diligent.
                    Reliable.
                    A Self-starter.
                    Motivated.
                    Dynamic

                    I am able to handle multiple tasks on a daily basis.
                    I use a creative approach to problem solve.
                    I am a dependable person who is great at time management.
                    I am always energetic and eager to learn new skills.
                    I have experience working as part of a team and individually.
                    Mo
                </p>


                function myFunction() {
  var element = document.getElementById("myDIV");
                element.classList.add("mystyle");
}




                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Notification Sound</title>
                        <style>
                            body {
                                text - align: center;
			}
                            h1 {
                                color: green;
			}
                        </style>
                        <script>
                            function play1() {
				
				/* Audio link for notification */
				var mp3 = '<source src=" " type="audio/mpeg">';
                                document.getElementById("sound").innerHTML =
                                '<audio autoplay="autoplay">' + mp3 + "</audio>";
			}
                        </script>
                    </head>
                    <body>
                        <h1>GeeksforGeeks</h1>
                        <b>Notification Sound</b>
                        <br>

                            <!-- The onclick fires play1 function -->
                            <button onclick="play1();">
                                Get notification sound
                            </button>
                            <div id="sound"></div>
                    </body>
                </html>




                <!doctype html>
                <html>
                    <head>
                        <title>Audio</title>
                    </head>
                    <body>

                        <script>
                            function play() {
        var audio = document.getElementById("audio");
                            audio.play();
      }
                        </script>

                        <input type="button" value="PLAY" onclick="play()">
                            <audio id="audio" src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>

                    </body>
                </html>



                import React, {useState, useEffect} from "react"
                import {Link} from "react-router"
                import {prefixLink} from "gatsby-helpers"
                import Helmet from "react-helmet"
                import {config} from "config"

                export default function Header(props) {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
                    window.addEventListener("scroll", () => {
                        setScroll(window.scrollY > 10)
                    })
                }, [])
                return (
                <header className={scroll ? "main-header scrolled" : "main-header"}>
                </header>
                )
}




                const [scroll, setScroll] = useState(0)

  useEffect(() => {
                    document.addEventListener("scroll", () => {
                        const scrollCheck = window.scrollY < 100
                        if (scrollCheck !== scroll) {
                            setScroll(scrollCheck)
                        }
                    })
                })




                {/* final scroll  */}
                const [scroll, setScroll] = useState(false);

 useEffect(() => {
                    window.addEventListener("scroll", () => {
                        setScroll(window.scrollY > specify_height_you_want_to_change_after_here);
                    });
 }, []);
                Then you can change your class or anything according to scroll.

                <nav className={scroll ? "bg-black" : "bg-white"}>...</nav>
