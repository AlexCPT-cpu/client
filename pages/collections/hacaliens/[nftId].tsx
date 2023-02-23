import React from "react";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import { Header } from "@/components/Header";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import DynamicCard from "../../../components/project/Nft/DynamicCard";

const nftId = () => {
  const router = useRouter();
  const { nftId } = router.query;

  return (
    <div>
      <Meta />
      <main>
        <Header />
        <div className={styles.center}>
            <div className="flex justify-center px-20 md:pt-12 m-auto items-start">
          <DynamicCard index={Number(nftId)} colName="HAC333" />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default nftId;
