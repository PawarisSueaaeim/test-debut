'use client';
import { setCookie } from '@/utils/cookie';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
    local: string;
};

export default function Header({ local }: Props) {
    const t = useTranslations('Navigations');
    const [valueSearch, setValueSearch] = useState('Search...');
    const [showMenu, setShowMenu] = useState(false);

    const handleChangeLanguages = (value: string) => {
        setCookie('i18next', value, 900000);
    };

    const onChangeSearch = (value: string) => {
        setValueSearch(value)
    }

    useEffect(() => {
        console.log(valueSearch)
    },[valueSearch]);

    return (
        <div className="relative flex justify-between items-center pr-2 overflow-x-hidden">
            <Image
                className="max-md:w-40"
                src="/images/SOne_index_logo.png"
                alt="logo"
                height={300}
                width={300}
            />
            <div className="flex flex-col items-end gap-2">
                <div className="flex justify-end gap-2">
                    <Image
                        src={
                            local === 'th'
                                ? '/images/SOne_index_iconthai.jpg'
                                : '/images/SOne_index_iconthai2.jpg'
                        }
                        alt="thai fag"
                        height={25}
                        width={25}
                        onClick={() => handleChangeLanguages('th')}
                    />
                    <Image
                        src={
                            local === 'en'
                                ? '/images/SOne_index_iconeng.jpg'
                                : '/images/SOne_index_iconeng2.jpg'
                        }
                        alt="eng fag"
                        height={25}
                        width={25}
                        onClick={() => handleChangeLanguages('en')}
                    />
                </div>
                <div className="hidden md:flex items-center border border-red-500 min-w-[235px]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border-none w-full"
                        value={valueSearch}
                        onChange={(event) => onChangeSearch(event.target.value)}
                    />
                    <span className="flex justify-center items-center border-l border-red-500">
                        <Image
                            src="/images/SOne_index_btsearch.jpg"
                            alt="search"
                            height={27}
                            width={27}
                        />
                    </span>
                </div>
                <div className="md:hidden">
                    <Image
                        src={'/images/SOne_Mobile_arrow01.jpg'}
                        alt="openMenu"
                        width={20}
                        height={20}
                        onClick={() => setShowMenu(true)}
                    />
                </div>
                <div className="hidden md:flex justify-center items-center text-sm gap-1">
                    <span className="hover:text-orange-500">{t('about')}</span>
                    <span>|</span>
                    <span className="hover:text-orange-500">
                        {t('job_opportunity')}
                    </span>
                    <span>|</span>
                    <span className="hover:text-orange-500">
                        {t('contact')}
                    </span>
                    <span>|</span>
                    <span className="hover:text-orange-500">
                        {t('site_map')}
                    </span>
                </div>
            </div>
            <div className={`${showMenu ? "right-[-2px] duration-300" : "right-[-100%] duration-300"} top-0 fixed min-h-screen bg-black p-2`}>
                <div className="flex flex-col text-white gap-2">
                    <Image
                        src={'/images/SOne_Mobile_arrow02.jpg'}
                        alt="openMenu"
                        width={20}
                        height={20}
                        onClick={() => setShowMenu(false)}
                    />
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-none w-full text-black"
                            value={valueSearch}
                            onChange={(event) =>
                                onChangeSearch(event.target.value)
                            }
                        />
                        <Image
                            src="/images/SOne_Mobile_search.png"
                            alt="search"
                            height={27}
                            width={27}
                        />
                    </div>
                    <span className="hover:text-orange-500">{t('about')}</span>
                    <span className="hover:text-orange-500">
                        {t('job_opportunity')}
                    </span>
                    <span className="hover:text-orange-500">
                        {t('contact')}
                    </span>
                    <span className="hover:text-orange-500">
                        {t('site_map')}
                    </span>
                </div>
            </div>
        </div>
    );
}
