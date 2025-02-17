import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function PromoNewsSafe({}: Props) {
    const t = useTranslations('Homepage');

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

    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3">
                <div className="bg-orenge text-white font-semibold p-1">
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
                        />
                    </div>
                </div>
                <div className='bg-orenge h-[13px] w-full'/>
            </div>
            <div className="bg-red-300 col-span-6">2</div>
            <div className="bg-blue-400 col-span-3">3</div>
        </div>
    );
}
