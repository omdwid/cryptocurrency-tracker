import Image from "next/image";
import React from "react";

interface Props {
    imageUrl: string;
    name: string;
}

const CoinCard = ({ imageUrl, name }: Props) => {
    return (
        <div className="flex gap-2 items-center dark:text-primary-100 text-black">
            {/* <Image src={imageUrl} alt="coin" width={25} height={25} /> */}
            <p>{name}</p>
        </div>
    );
};

export default CoinCard;
