import React from "react";
type CardProps = {
  name: string;
  ImageURi: string;
  mainImage: string;
  owner: string;
  mintAddress: string;
  tokenAddress: string;
};

const Card: React.FC<CardProps> = ({
  name,
  ImageURi,
  mainImage,
  owner,
  mintAddress,
  tokenAddress,
}) => {
  return (
    <div className=" bg-black p-4 rounded-2xl">
      <div className="flex justify-between w-11/12 mx-auto ">
        <div className="text-primary-">{name}</div>
        <div>
          <img src={ImageURi} alt="" />
        </div>
      </div>
      <div className="flex items-center pt-2 justify-center">
        <img className="rounded-2xl" src={mainImage} alt="" />
      </div>
      <div className="bg-secondary-gray mt-6  p-3">
        <div className="bg-gray  rounded-2xl mb-3 p-1  flex  justify-between">
          <p className="text-primary- pl-1">Owner</p>
          <p className="text-primary- first-letter: border-l mt-1 pl-4 pr-2 border-gray-500">
            {owner}
          </p>
        </div>
        <div className="bg-gray  rounded-2xl mb-3 p-1  flex  justify-between">
          <p className="text-primary- pl-1">mintAddress</p>
          <p className="text-primary- first-letter: border-l mt-1 pl-4 pr-2 border-gray-500">
            {mintAddress}
          </p>
        </div>
        <div className="bg-gray rounded-2xl   flex p-1  justify-between">
          <p className="text-primary- pl-1">tokenAddress</p>
          <p className="text-primary- first-letter: border-l mt-1 pl-4  pr-2 border-gray-500">
            {tokenAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
