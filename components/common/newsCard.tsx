import Image from 'next/image';
import React from 'react';

type Props = {
    pic: string;
    day: string;
    month: string;
    years: string;
    detail: string;
    bgColor: string;
};

export default function NewsCard({ pic, day, month, years, detail, bgColor }: Props) {
    return (
        <div className="relative flex flex-col gap-3">
            <div className="flex flex-col">
                <Image src={pic} alt={pic} width={145} height={90} />
                <div className={`duration-500 h-[6px] w-full ${bgColor}`} />
            </div>
            <div>{detail}</div>
            <div className="absolute flex flex-col justify-center items-center top-1 left-1 bg-black text-white text-[10px] p-1 leading-[0.6rem]">
                <div>{day}</div>
                <div>{month}</div>
                <div>{years}</div>
            </div>
        </div>
    );
}
