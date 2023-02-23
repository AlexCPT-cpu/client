export type String = string;
export type Number = number;
export type NumArr = number[];
export type StrArr = string[];
export type Any = any;

export interface ProjectCardProps {
  name: String;
  logo: String;
  link: String;
}

export type MetaProps = {
  title: string;
  keyword: string;
  desc: string;
};

export interface NftProps {
  image?: String;
  id?: String;
  rank?: Number;
  rs?: Number;
  colName?: String
  index?: Number
}

export interface collectionName {
  colName: String
}
