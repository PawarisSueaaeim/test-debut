'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function Menu({}: Props) {
    const t = useTranslations('Homepage');
    const path = usePathname();

    const [onMouseEnterSocial, setOnMouseEnterSocial] = useState<string>('');
    const [onMouseEnterMenu, setOnMouseEnterMenu] = useState<string>('');
    const [onMouseEnterMenuMobile, setOnMouseEnterMenuMobile] =
        useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const menu = [
        { id: '001', title: t('product_services'), path: '/product-service' },
        { id: '002', title: t('promotions'), path: '/promotions' },
        { id: '003', title: t('news_events'), path: '/news-event' },
        { id: '004', title: t('safety_tips'), path: '/safety-tips' },
        { id: '005', title: t('faqs'), path: '/faqs' },
        { id: '006', title: t('location'), path: '/location' },
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

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div>
            <div className="flex justify-between bg-black px-1 py-2">
                <div className="max-[860px]:hidden flex text-sm font-normal gap-8">
                    {menu.map((item) => {
                        return (
                            <Link key={item.id} href={item.path}>
                                <span
                                    className={`flex text-white gap-2 ${
                                        path === item.path ? 'text-orenge' : ''
                                    }`}
                                >
                                    <Image
                                        src={
                                            path === item.path ||
                                            onMouseEnterMenu === item.id
                                                ? '/images/SOne_index_menu02.png'
                                                : '/images/SOne_index_menu01.png'
                                        }
                                        alt="icon_menu"
                                        height={20}
                                        width={20}
                                        onMouseEnter={() =>
                                            setOnMouseEnterMenu(item.id)
                                        }
                                        onMouseLeave={() =>
                                            setOnMouseEnterMenu('')
                                        }
                                    />
                                    <span className="hover:text-orenge">
                                        {item.title}
                                    </span>
                                </span>
                            </Link>
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
                                    setOnMouseEnterSocial(`${item.id}`)
                                }
                                onMouseLeave={() => setOnMouseEnterSocial('')}
                            >
                                <Image
                                    src={
                                        item.id === onMouseEnterSocial
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
                } absolute min-h-screen bg-black z-[99]`}
            >
                {menu.map((item) => {
                    return (
                        <Link key={item.id} href={item.path}>
                            <div className="text-white p-2 hover:text-orange-600">
                                {item.title}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
