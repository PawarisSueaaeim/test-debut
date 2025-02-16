'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

export default function Menu({}: Props) {
    const t = useTranslations('Homepage');

    const [onMouseEnter, setOnMouseEnter] = useState<string>('');
    const [onMouseEnterMenuMobile, setOnMouseEnterMenuMobile] =
        useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const menu = [
        { id: '001', title: t('product_services') },
        { id: '002', title: t('promotions') },
        { id: '003', title: t('news_events') },
        { id: '004', title: t('safety_tips') },
        { id: '005', title: t('faqs') },
        { id: '006', title: t('location') },
    ];

    const socialMenu = [
        {
            id: '001',
            src: '/images/SOne_index_btfacebook.png',
            hoverSrc: '/images/SOne_index_btfacebook1.png',
        },
        {
            id: '002',
            src: '/images/SOne_index_bttwitter.png',
            hoverSrc: '/images/SOne_index_bttwitter1.png',
        },
        {
            id: '003',
            src: '/images/SOne_index_btyoutube.png',
            hoverSrc: '/images/SOne_index_btyoutube1.png',
        },
    ];

    return (
        <div>
            <div className="flex justify-between bg-black px-1 py-2">
                <div className="max-[860px]:hidden flex text-sm font-normal gap-8">
                    {menu.map((item) => {
                        return (
                            <span
                                key={item.id}
                                className="flex text-white hover:text-[#f05a28] gap-2"
                            >
                                <Image
                                    src={'/images/SOne_index_menu02.png'}
                                    alt="icon_menu"
                                    height={20}
                                    width={20}
                                />
                                {item.title}
                            </span>
                        );
                    })}
                </div>
                <div className="min-[860px]:hidden">
                    <Image
                        onMouseEnter={() => setOnMouseEnterMenuMobile(true)}
                        onMouseLeave={() => setOnMouseEnterMenuMobile(false)}
                        src={
                            onMouseEnterMenuMobile
                                ? '/images/SOne_Mobile_menuho.png'
                                : '/images/SOne_Mobile_menu.png'
                        }
                        alt="menu mobile"
                        height={20}
                        width={20}
                        onClick={() => setShowMenu(!showMenu)}
                    />
                </div>
                <div className="flex justify-center items-center gap-1">
                    {socialMenu.map((item) => {
                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() =>
                                    setOnMouseEnter(`${item.id}`)
                                }
                                onMouseLeave={() => setOnMouseEnter('')}
                            >
                                <Image
                                    src={
                                        item.id === onMouseEnter
                                            ? item.hoverSrc
                                            : item.src
                                    }
                                    alt={item.id}
                                    height={20}
                                    width={20}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div
                className={`${
                    showMenu
                        ? ' left-0 duration-300'
                        : ' left-[-100%] duration-300'
                } absolute min-h-screen bg-black`}
            >
                {menu.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="text-white p-2 hover:text-orange-600"
                        >
                            {item.title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
