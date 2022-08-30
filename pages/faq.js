import Link from '../src/components/Link';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const FAQ_API_URL =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
  return {
    props: {
      faq,
    },
  };
}

function FAQPage({ faq }) {
  return (
    <div>
      <h1>FAQ</h1>
      <Link href='/'>Ir para o home</Link>
      <ul>
        {faq.map(({ answer, question }) => {
          return (
            <li key={question}>
              <h2>{question}</h2>
              <p>{answer}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FAQPage;
