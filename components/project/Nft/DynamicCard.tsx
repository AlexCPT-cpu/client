import { NftProps } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import AttributesCard from "./AttributesCard";

const NftCard = ({ image, id, rank, rs, colName, index , rarity}: NftProps) => {
  const nft = rarity[index! - 1];

  return (
    <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-2 justify-center items-center m-auto ml-8 md:ml-32 lg:ml-0">
      <div className="relative mr-8 text-center flex justify-center items-center">
        <img
          className="rounded-xl w-[305px] ml-7 md:ml-8 lg:w-[700px] lg:h-[750px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
          src={nft?.image}
          alt={String(rank)}
        />
        <div className="font-normal absolute w-fit top-1 right-2 lg:right-[1%] px-1 bg-neutral-800 rounded-md text-gray-400 cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-sky-500 to-purple-400 font-semibold">
            RS
          </span>{" "}
          {nft?.Rarity?.toFixed(0)}
        </div>
      </div>
      <div className="p-4 bg-white text-black rounded-lg w-[300px] lg:w-[400px] pb-6 text-sm lg:text-sm">
        <div className="font-semibold py-2 mb-4">
          {" "}
          {colName}&nbsp; #{nft?.token_id}
        </div>
        <div className="bg-sky-300 p-2 rounded-md text-center">
          <div className="text-white text-2xl p-1">Rarity Score</div>
          <div className="bg-white text-emerald-600 p-2 rounded-md font-bold">
            {nft?.Rarity?.toFixed(2)}
          </div>
          <div className="p-2 text-white">{colName} NFT Ranking</div>
        </div>
        <div>
          {nft?.Attributes.map((attribute, index) => {
            return (
              <div key={index}>
                <AttributesCard
                  traitType={attribute?.trait_type}
                  score={String(attribute.rarityScore.toFixed(1))}
                  traitValue={String(attribute?.value)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

NftCard.defaultProps = {
  image:
    "https://gateway.ipfs.io/ipfs/QmTHLfR5YoDbjfmMoWBYFNEdZz8Ef57VWtJzvom43xVhYx",
  id: 1,
  rank: 1,
  rs: 223,
};

export default NftCard;
