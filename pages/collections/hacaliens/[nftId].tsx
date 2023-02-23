import React from "react";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";

const NftId = () => {
  const router = useRouter();
  const { nftId } = router.query;

  return (
    <div className='min-h-screen'>
      <Meta /><div className='text-3xl font-bold'>
        Coming Soon ...
      </div>
    </div>
  );
};

export default NftId;
