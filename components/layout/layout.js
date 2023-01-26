import ContentArea from './content-area';
import Navbar from './navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ContentArea>
        <main>{children}</main>
      </ContentArea>
    </>
  );
}

export default Layout;
