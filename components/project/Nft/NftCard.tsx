import { NftProps } from "@/types/types";
import Link from "next/link";
import React from "react";

const NftCard = ({ image, id, rank, rs, colName, index}: NftProps) => {
  return (
    <Link href={`/collections/${colName}/${index}`}>
    <div className="flex flex-col cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
      <div className="relative">
        <img
          className="rounded-tl-md rounded-tr-md w-32 lg:w-36"
          src={image}
          alt={String(rank)}
        />
        <div className="font-normal absolute w-fit top-1 left-2 px-1 bg-neutral-800 rounded-md text-gray-400 cursor-pointer text-sm">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-300 via-blue-500 to-purple-400 text-sm lg:font-semibold">
            ID
          </span>{" "}
          {id}
        </div>
        <div className="font-normal absolute w-fit top-1 right-2 px-1 bg-neutral-800 rounded-md text-gray-400 cursor-pointer text-sm">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-sky-500 to-purple-400 text-sm lg:font-semibold">
            RS
          </span>{" "}
          {rs}
        </div>
      </div>
      <div className="bg-white text-black w-full px-8 py-2 min-h-[50px] rounded-bl-md rounded-br-md flex flex-col justify-center">
      <div className="absolute w-fit font-bold text-center flex justify-center">Rank #{rank}</div>
      </div>
    </div>
    </Link>
  );
};

NftCard.defaultProps = {
    image: 'https://gateway.ipfs.io/ipfs/QmTHLfR5YoDbjfmMoWBYFNEdZz8Ef57VWtJzvom43xVhYx',
    id: 1,
    rank: 1,
    rs: 223,
}

export default NftCard;
