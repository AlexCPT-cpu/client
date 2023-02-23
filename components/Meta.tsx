import Head from "next/head";
import { MetaProps } from "@/types/types";

const Meta = ({ title, keyword, desc }: MetaProps) => {
  return (
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  );
};

Meta.defaultProps = {
  title: "Rarity Ranking App",
  keyword:
    "Niftys Rarity Tools",
  desc: "Niftys Rarity Tools.",
};

export default Meta;
