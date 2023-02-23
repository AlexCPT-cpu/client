import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rarity Ranking App</title>
        <meta name="description" content="Niftys Rarity Tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <div className={styles.center}>
          <Main />
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
