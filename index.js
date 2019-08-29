'use strict';

function App(props) {
  return (
    <div className="container">
    <main role="main">
    <header role="banner">
      <h1>Sally Student</h1>
      <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="An image of Sally" />
    </header>
    
    <address>
      Email: <a href="mailto:sallystudent@thinkful.com?subject=Work For Us!" target="_blank">sallystudent@thinkful.com</a>
      <p>Phone: (797) 491-1568</p>
    </address>

    
    <section>
      <h2>Education</h2>
      <p>University of Waterloo</p>
      <p>Waterloo, Ontario, Canada</p>
      <p>Graduated: May 25, 2010</p>
      <p>B.S. Computer Science</p>
    </section>

    
    <section>
      <h2>Experience</h2>
      <div class="job-experience">
        <h3>Pixel</h3>
        <p>Los Angeles, CA</p>
        <p>Junior Software Engineer, June 2010 - October 2014</p>
        <p>Developed, tested, and maintained software applications and programs.</p>
      </div>
    
      <div class="job-experience">
        <h3>MPromote</h3>
        <p>Brooklyn, NY</p>
        <p>Programs Manager, January 2015 - December 2018</p>
        <p>Developed new programs to support the strategic direction of clientele.</p>
      </div>
    </section>
  </main>
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
