'use client';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

export default function Banner({}: Props) {
    const [indexImage, setIndexImage] = useState<number>(0);

    const imageDatas = [
        {
            id: '001',
            src: '/images/SOne_index_pic02.jpg',
            srcActive: '/images/SOne_index_pic01.jpg',
        },
        {
            id: '002',
            src: '/images/SOne_index_pic02.jpg',
            srcActive: '/images/SOne_index_pic01.jpg',
        },
        {
            id: '003',
            src: '/images/SOne_index_pic02.jpg',
            srcActive: '/images/SOne_index_pic01.jpg',
        },
    ];

    const handleIndexImageUp = () => {
        if (indexImage > 0) {
            setIndexImage(indexImage - 1);
        }
    };

    const handleIndexImageDown = () => {
        if (indexImage < imageDatas.length - 1) {
            setIndexImage(indexImage + 1);
        }
    };

    return (
        <div className="relative w-full h-full">
            <Image
                src={'/images/SOne_index_banner.jpg'}
                alt="banner"
                width={500}
                height={500}
                className="object-cover w-full h-full"
            />
            <div className="absolute flex flex-col justify-between items-center h-full z-10 right-0 top-0 py-4">
                <Image
                    src={'/images/SOne_index_arrowup.png'}
                    alt="/images/SOne_index_arrowup.png"
                    height={28}
                    width={28}
                    onClick={() => handleIndexImageUp()}
                />
                {imageDatas.map((item, index) => {
                    return (
                        <Image
                            className="border border-orenge"
                            key={item.id}
                            src={
                                index === indexImage ? item.srcActive : item.src
                            }
                            alt={item.src}
                            height={100}
                            width={100}
                        />
                    );
                })}
                <Image
                    src={'/images/SOne_index_arrowdown.png'}
                    alt="/images/SOne_index_arrowup.png"
                    height={28}
                    width={28}
                    onClick={() => handleIndexImageDown()}
                />
            </div>
        </div>
    );
}
