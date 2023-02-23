import React from "react";
import NftCard from "./NftCard";
import rarity from "../../../config/rarity.json";
import { collectionName } from "@/types/types";

const NftGrid = ({ colName }: collectionName) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {rarity.map((nft, index) => {
        return (
          <div key={index}>
            <NftCard index={index+1} colName={colName} image={nft.image} id={nft.token_id} rank={nft.Rank} rs={Number(nft.Rarity.toFixed(1))} />
          </div>
        );
      })}
    </div>
  );
};

export default NftGrid;
