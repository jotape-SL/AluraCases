import Link from '../src/components/Link';

function GlobalStyle() {
  return (
    <style global jsx>{`
      body {
        font-family: sans-serif;
      }
    `}</style>
  );
}

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
      <GlobalStyle />
      <Title>Home Page - Alura Cases</Title>
      <Link href='/faq'>FAQ</Link>
    </div>
  );
}

export default HomePage;
