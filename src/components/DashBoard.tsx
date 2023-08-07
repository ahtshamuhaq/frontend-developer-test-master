import React, { useEffect, useState } from "react";
import groupIcon from "../assests/Group 185.png";
import more from "../assests/more options.png";
import avatar from "../assests/avatar.png";
import tryIcon from "../assests/Vector.png";
import Card from "./Card";
import { Metaplex, PublicKey } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));
const metaplex = new Metaplex(connection);
const owner = new PublicKey("narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X");
const DashBoard: React.FC = () => {
  const initialCardData: any[] = [];
  const [cardData, setCardData] = useState(initialCardData);

  console.log("public", metaplex.identity().publicKey);
  const fetchNFTs = async () => {
    try {
      const myNfts = await metaplex.nfts().findAllByOwner({
        owner: metaplex.identity().publicKey,
      });
      const newCardData = myNfts.map((nft) => {
        const addressStr = nft.address.toString();
        const shortAddress =
          addressStr.length > 20
            ? `${addressStr.slice(0, 5)}.....${addressStr.slice(-5)}`
            : addressStr;
        const shortTokenAddress =
          addressStr.length > 20
            ? `${addressStr.slice(4, 5)}${addressStr.slice(-9)}.....`
            : addressStr;
        const base64String = "fa121f96-9817-448d-b3c4-669a342db94b";
        const imageSrc = `data:image/png;base64,${base64String}`;
        return {
          name: nft.name.slice(0, 6),
          mainImage: imageSrc,
          ImageURi: more,
          owner: nft.name,
          mintAddress: shortAddress,
          tokenAddress: shortTokenAddress,
        };
      });

      setCardData(newCardData);
    } catch (error) {
      console.log("error is ", error);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  const leftButton = () => {
    setCardData((prevData) => {
      const duplicate = [...prevData];
      const lastCard = duplicate.pop();
      if (lastCard) {
        duplicate.unshift(lastCard);
      }
      return duplicate;
    });
  };

  const rightButton = () => {
    setCardData((prevData) => {
      const duplicate = [...prevData];
      const firstCard = duplicate.shift();
      if (firstCard) {
        duplicate.push(firstCard);
      }
      return duplicate;
    });
  };
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="mt-4 pt-4 flex justify-between items-center ">
          <div className="bg-secondary-gray w-fit  flex items-center py-1 px-3 rounded-2xl  ">
            <div className="bg-white w-6 h-6 rounded-full flex justify-center items-center">
              <img src={groupIcon} alt="" />
            </div>
            <p className="font-normal text-primary- leading-5 ml-4">ETH/USDT</p>
            <p className="font-normal text-green leading-5 ml-4">
              1137.62 +2.62%↑
            </p>
          </div>
          <div className="bg-secondary-gray w-fit  flex items-center py-1 px-3 rounded-2xl  ">
            <div>
              <img src={avatar} alt="" />
            </div>
            <p className="font-normal text-primary- leading-5 ml-4">zash</p>
            <p className="h-3 border-l mt-1 ml-4  border-gray-500"></p>
            <p className="font-normal text-primary- leading-5 ml-4 ">
              User ID: 11026666
            </p>
          </div>
        </div>
        <div className="py-5 flex justify-between">
          <div>
            <p className="font-medium text-lg ml-4 leading-8 text-primary-">
              Dashboard
            </p>
          </div>
          <div className="bg-primary-gray w-10 h-10 mr-3 rounded-2xl flex justify-center items-center ">
            <img src={tryIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="flex w-11/12 mx-auto justify-between mt-12 ">
        {cardData.slice(0, 3).map((card, index) => (
          <div className="w-[30%] h-[600px] mr-6" key={index}>
            <Card
              name={card.name}
              mainImage={card.mainImage}
              ImageURi={card.ImageURi}
              owner={card.owner}
              mintAddress={card.mintAddress}
              tokenAddress={card.tokenAddress}
            />
          </div>
        ))}
      </div>
      <div className="bg-black w-[295px] mb-10 justify-between mx-auto rounded-[32px] flex p-3">
        <div
          onClick={rightButton}
          className="bg-gray w-14 p-2 h-14 rounded-full flex justify-center items-center"
        >
          <i className="fa fa-angle-left text-6xl text-white"></i>
        </div>
        <div
          onClick={leftButton}
          className="bg-gray w-14 p-2 h-14 rounded-full flex justify-center items-center"
        >
          <i className="fa fa-angle-right text-6xl text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
