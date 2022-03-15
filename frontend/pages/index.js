import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ gifs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Goth Cats</title>
        <meta name="description" content="A place for gothic felines." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Goth Cats
        </h1>

        <div className={styles.grid}>
          {gifs.map((cat) => (
            <div key={cat.id} className={styles.card}>
              <p>{cat.title}</p>
              <img src={cat.link} alt={cat.title} width="250" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GothCats {
        gifs {
          title
          link
          id
        }
      }
    `,
  });

  return {
    props: {
      gifs: data.gifs.slice(0, 8),
    },
  };
}
