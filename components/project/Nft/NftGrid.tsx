import React from "react";
import NftCard from "./NftCard";
import { collectionName } from "@/types/types";

const NftGrid = ({ colName, json }: collectionName) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {json?.map((nft:any, index:any) => {
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
