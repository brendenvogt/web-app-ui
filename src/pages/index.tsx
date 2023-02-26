import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <p>This is the nav</p>
      </nav>
      <main>
        <h1>Welcome</h1>
      </main>
      <footer>
        <p>This is the footer</p>
      </footer>
    </>
  );
}
