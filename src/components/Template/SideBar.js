import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Derek Avery</h2>
        <p><a href="mailto:averyderekl@gmail.com">averyderekl@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>My name is Derek Avery. I decided to pursue Software Engineering
        because I love solving challenging problems and teaching myself new skills.
        Please feel free to explore this site to find out more about me. Thank
        you for taking the time to visit!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Derek Avery <Link to="/">averydl.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
