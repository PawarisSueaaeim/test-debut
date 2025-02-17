'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import NewsCard from '../common/newsCard';

type Props = {};

export default function PromoNewsSafe({}: Props) {
    const t = useTranslations('Homepage');

    const [idNewsEventActive, setIdNewsEventActive] = useState('001');
    const [searchTrips, setSearchTrips] = useState('Search...');

    const dayDatas = [
        { id: '01', day: '1' },
        { id: '02', day: '2' },
        { id: '03', day: '3' },
        { id: '04', day: '4' },
        { id: '05', day: '5' },
        { id: '06', day: '6' },
        { id: '07', day: '7' },
        { id: '08', day: '8' },
        { id: '09', day: '9' },
        { id: '10', day: '10' },
        { id: '11', day: '11' },
        { id: '12', day: '12' },
        { id: '13', day: '13' },
        { id: '14', day: '14' },
        { id: '15', day: '15' },
        { id: '16', day: '16' },
        { id: '17', day: '17' },
        { id: '18', day: '18' },
        { id: '19', day: '19' },
        { id: '20', day: '20' },
        { id: '21', day: '21' },
        { id: '22', day: '22' },
        { id: '23', day: '23' },
        { id: '24', day: '24' },
        { id: '25', day: '25' },
        { id: '26', day: '26' },
        { id: '27', day: '27' },
        { id: '28', day: '28' },
        { id: '29', day: '29' },
        { id: '30', day: '30' },
        { id: '31', day: '31' },
    ];

    const monthDatas = [
        { id: '01', mounth: t('jan') },
        { id: '02', mounth: t('feb') },
        { id: '03', mounth: t('mar') },
        { id: '04', mounth: t('apr') },
        { id: '05', mounth: t('may') },
        { id: '06', mounth: t('jun') },
        { id: '07', mounth: t('jul') },
        { id: '08', mounth: t('aug') },
        { id: '09', mounth: t('sep') },
        { id: '10', mounth: t('oct') },
        { id: '11', mounth: t('nov') },
        { id: '12', mounth: t('dec') },
    ];

    const yearDatas = [
        { id: '01', year: 2014 },
        { id: '02', year: 2015 },
        { id: '03', year: 2016 },
        { id: '04', year: 2017 },
        { id: '05', year: 2018 },
        { id: '06', year: 2019 },
        { id: '07', year: 2020 },
        { id: '08', year: 2021 },
        { id: '09', year: 2022 },
        { id: '10', year: 2023 },
        { id: '11', year: 2024 },
        { id: '12', year: 2025 },
    ];

    const newsAndEventDatas = [
        {
            id: '001',
            day: '19',
            month: 'Nov',
            years: '2014',
            pic: '/images/SOne_index_news_pic3.png',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '002',
            day: '19',
            month: 'Nov',
            years: '2014',
            pic: '/images/SOne_index_news_pic3.png',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '003',
            day: '19',
            month: 'Nov',
            years: '2014',
            pic: '/images/SOne_index_news_pic3.png',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-1">
            <div className="col-span-3">
                <div className="bg-orenge text-white p-1 text-xl">
                    {t('promotions')}
                </div>
                <hr className="bg-white" />
                <div className="flex flex-col justify-center items-end bg-black text-white border border-orenge p-4 gap-2">
                    <div className="flex gap-1">
                        <span>{t('day')}</span>
                        <select className="text-black min-w-[170px] border border-orenge">
                            {dayDatas.map((item) => {
                                return (
                                    <option key={item.id} value={item.day}>
                                        {item.day}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex gap-1">
                        <span>{t('month')}</span>
                        <select className="text-black min-w-[170px] border border-orenge">
                            {monthDatas.map((item) => {
                                return (
                                    <option key={item.id} value={item.mounth}>
                                        {item.mounth}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex gap-1">
                        <span>{t('years')}</span>
                        <select className="text-black min-w-[170px] border border-orenge">
                            {yearDatas.map((item) => {
                                return (
                                    <option key={item.id} value={item.year}>
                                        {item.year}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="text-xs text-orenge">
                        {t('promotions_details')}
                    </div>
                    <div className="flex justify-center items-center min-w-[170px]">
                        <Image
                            src={'/images/SOne_index_search.png'}
                            alt="tires_search"
                            height={24}
                            width={100}
                            className='hover:cursor-pointer active:scale-90 duration-150'
                        />
                    </div>
                </div>
                <div className="bg-orenge h-[13px] w-full" />
            </div>
            <div className="flex flex-col border border-orenge col-span-6">
                <div className="flex justify-between items-center p-1 text-xl">
                    {t('news_events')}
                    <div className="flex gap-1">
                        {newsAndEventDatas.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() =>
                                        setIdNewsEventActive(item.id)
                                    }
                                >
                                    <Image
                                        src={
                                            idNewsEventActive === item.id
                                                ? '/images/SOne_index_bullet1.png'
                                                : '/images/SOne_index_bullet2.png'
                                        }
                                        alt="/images/SOne_index_bullet2.png"
                                        height={10}
                                        width={10}
                                        className='hover:cursor-pointer active:scale-90 duration-150'
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <hr className="border border-t-orenge bg-none" />
                <div className="grid grid-cols-3 gap-4 p-3">
                    {newsAndEventDatas.map((item) => {
                        return (
                            <Fragment key={item.id}>
                                <NewsCard
                                    pic={item.pic}
                                    day={item.day}
                                    month={item.month}
                                    years={item.years}
                                    detail={item.detail}
                                    bgColor={
                                        idNewsEventActive === item.id
                                            ? 'bg-orenge'
                                            : 'bg-black'
                                    }
                                />
                            </Fragment>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col col-span-3 gap-2">
                <div className="flex max-h-[142px] w-full">
                    <Image
                        src="/images/SOne_index_tips1.png"
                        alt="/images/SOne_index_tips1.png"
                        height={142}
                        width={200}
                        className="object-cover"
                    />
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-col justify-center items-center bg-[#252525] border-t border-r border-b border-orenge p-2">
                            <div className="text-orenge text-xl">
                                {t('safety_tips')}
                            </div>
                            <div className="flex justify-start items-center w-full">
                                <Image
                                    src="/images/SOne_index_pic66.png"
                                    alt="/images/SOne_index_pic66.png"
                                    width={13}
                                    height={9}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center text-white text-sm">
                                <span>{t('safety_tips_details1')}</span>
                                <span>{t('safety_tips_details2')}</span>
                                <span>{t('safety_tips_details3')}</span>
                            </div>
                            <div className="flex justify-end items-center w-full">
                                <Image
                                    src="/images/SOne_index_pic99.png"
                                    alt="/images/SOne_index_pic99.png"
                                    width={13}
                                    height={9}
                                />
                            </div>
                        </div>
                        <div className="h-[8px]" />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span>{t('safety_tips_search_details')}</span>
                    <div className="flex border border-orenge">
                        <input
                            type="text"
                            placeholder='search...'
                            value={searchTrips}
                            onChange={(event) =>
                                setSearchTrips(event.target.value)
                            }
                        />
                        <Image
                            src="/images/SOne_index_btgo.jpg"
                            alt="/images/SOne_index_btgo.jpg"
                            width={23}
                            height={23}
                            className="border-l border-orenge hover:cursor-pointer active:scale-90 duration-150"
                        />
                    </div>
                </div>
                <hr className='border-dashed border-t border-orenge'/>
                <div className='flex justify-center items-center'>
                    <Image
                        src='/images/SOne_index_call.png'
                        alt='/images/SOne_index_call.png'
                        height={33}
                        width={277}
                    />
                </div>
            </div>
        </div>
    );
}
