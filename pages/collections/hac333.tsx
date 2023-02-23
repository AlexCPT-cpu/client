import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'
import styles from "@/styles/Home.module.css";
import Meta from '@/components/Meta';
import NftGrid from '@/components/project/Nft/NftGrid';
import rarity from '../../config/rarity.json'

const hac333 = () => {
  return (
    <div>
      <Meta />
    <main>
    <Header />
    <div className={styles.center}>
      <NftGrid json={rarity} colName='hac333' />
      <div>
        <Footer />
      </div>
    </div>
  </main>
  </div>
  )
}

export default hac333