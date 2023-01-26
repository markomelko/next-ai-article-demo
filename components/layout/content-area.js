import classes from './content-area.module.css';

function ContentArea({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

export default ContentArea;
