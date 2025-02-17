'use client'
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

export default function Product({}: Props) {
    const [onMouseEnter, setOnMouseEnter] = useState('');

    const productDatas = [
        {
            id: '001',
            src: '/images/SOne_index_bt-tire.jpg',
            hoverSrc: '/images/SOne_index_bt-tire1.jpg',
        },
        {
            id: '002',
            src: '/images/SOne_index_bt-break.jpg',
            hoverSrc: '/images/SOne_index_bt-break1.jpg',
        },
        {
            id: '003',
            src: '/images/SOne_index_bt-battery.jpg',
            hoverSrc: '/images/SOne_index_bt-battery1.jpg',
        },
        {
            id: '004',
            src: '/images/SOne_index_bt-chokeup.jpg',
            hoverSrc: '/images/SOne_index_bt-chokeup1.jpg',
        },
        {
            id: '005',
            src: '/images/SOne_index_bt-oil.jpg',
            hoverSrc: '/images/SOne_index_bt-oil1.jpg',
        },
        {
            id: '006',
            src: '/images/SOne_index_bt-guarantee.jpg',
            hoverSrc: '/images/SOne_index_bt-guarantee1.jpg',
        },
    ];
    return (
        <div className="grid grid-cols-3 md:grid-cols-6">
            {productDatas.map((item) => {
                return (
                    <div
                        key={item.id}
                        onMouseEnter={() => setOnMouseEnter(`${item.id}`)}
                        onMouseLeave={() => setOnMouseEnter('')}
                        className="flex justify-center items-center"
                    >
                        <Image
                            src={
                                item.id === onMouseEnter
                                    ? item.hoverSrc
                                    : item.src
                            }
                            alt={item.src}
                            height={50}
                            width={190}
                            className='hover:cursor-pointer active:scale-90 duration-150'
                        />
                    </div>
                );
            })}
        </div>
    );
}
