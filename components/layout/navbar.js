import Link from 'next/link';

import IconHome from '../icons/home-icon';

import classes from './navbar.module.css';

function Navbar() {
  return (
    <div className={classes.navContainer}>
      <div>
        <Link href="/">
          <IconHome />
        </Link>
      </div>
      <div className={classes.navText}>ChatGPT QA demo</div>
    </div>
  );
}

export default Navbar;
