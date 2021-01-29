import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"My name is Derek Avery. I'm a Software Engineer located in Seattle, WA, and "
    + 'I am dedicated to pursuing challenging work and solving interesting problems.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Site Information</Link></h2>
          <p>
            Derek Avery&apos;s personal website.
            I will continue to add new content as I expand my professional portfolio,
            so please check back again soon!
          </p>
        </div>
      </header>
      <p> Thank you for visiting my website! Please feel free to learn more <Link to="/about">about me</Link>,
        look at my <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        Site source code available <a href="https://github.com/averydl/personal-site">here. {' '}</a>
        Deployment source code available <a href="https://github.com/averydl/aws-site-deploy">here.</a>
      </p>
    </article>
  </Main>
);

export default Index;
