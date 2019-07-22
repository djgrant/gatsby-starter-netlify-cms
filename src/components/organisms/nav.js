import React, { useState } from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  const [isActive, setActive] = useState(false);
  return (
    <nav role="navigation" aria-label="main-navigation">
      <Link to="/" title="Logo">
        Addis Tour Guide
      </Link>
      <div onClick={() => setActive(!isActive)} active={isActive}>
        <div className="label">Menu</div>
        <div className="burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div active={isActive}>
        <div>
          <Link to="/tours">Tours</Link>
          <Link to="/guides">Guides</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
