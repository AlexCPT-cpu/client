import { NftProps } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import rarity from '../../../config/rarity.json'

const NftCard = ({ image, id, rank, rs, colName, index}: NftProps) => {

 const nft = (rarity[index! -1])

  return (
    <div className="flex flex-col lg:flex-row space-y-5 space-x-4">
      <div className="relative">
        <img
          className="rounded-xl w-72 lg:w-[50%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
          src={nft?.image}
          alt={String(rank)}
        />
        <div className="font-normal absolute w-fit top-1 left-2 px-1 bg-neutral-800 rounded-md text-gray-400 cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-300 via-blue-500 to-purple-400 font-semibold">
            ID
          </span>{" "}
          {nft?.token_id}
        </div>
        <div className="font-normal absolute w-fit top-1 right-2 lg:right-[51%] px-1 bg-neutral-800 rounded-md text-gray-400 cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-sky-500 to-purple-400 font-semibold">
            RS
          </span>{" "}
          {(nft?.Rarity).toFixed(0)}
        </div>
      </div>
      <div className="p-4 bg-white text-black">
       <div className="font-semibold"> {colName} #{nft?.token_id}</div>
      </div>
    </div>
  );
};

NftCard.defaultProps = {
    image: 'https://gateway.ipfs.io/ipfs/QmTHLfR5YoDbjfmMoWBYFNEdZz8Ef57VWtJzvom43xVhYx',
    id: 1,
    rank: 1,
    rs: 223,
}

export default NftCard;
