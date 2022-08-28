import Link from '../src/components/Link';
import Footer from '../src/components/patterns/Footer';

function Title({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </>
  );
}

function HomePage() {
  return (
    <div>
      <Title>Home Page - Alura Cases</Title>
      <Link href='/faq'>FAQ</Link>
      <Footer />
    </div>
  );
}

export default HomePage;
