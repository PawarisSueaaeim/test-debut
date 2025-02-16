import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default async function Tires({}: Props) {
    const t = await getTranslations('Homepage');

    const widthOptions = [
        { id: '001', value: '215' },
        { id: '002', value: '225' },
        { id: '003', value: '235' },
        { id: '004', value: '245' },
    ];

    const heightOptions = [
        { id: '001', value: '40' },
        { id: '002', value: '45' },
        { id: '003', value: '50' },
        { id: '004', value: '55' },
    ];

    const radiusOptions = [
        { id: '001', value: '15' },
        { id: '002', value: '16' },
        { id: '003', value: '17' },
        { id: '004', value: '18' },
    ];

    return (
        <div className="bg-orenge text-white">
            <div className="font-semibold text-lg px-1">
                {t('select_tires')}
            </div>
            <hr className="bg-white" />
            <div className="grid grid-cols-2 max-[531px]:grid-cols-1 py-1">
                <Image
                    src={'/images/SOne_index_bg_searchtype.jpg'}
                    alt="tires"
                    height={264}
                    width={264}
                />
                <div className="flex justify-end items-center">
                    <div className='flex flex-col gap-2 px-1'>
                        <div>
                            <div className="font-semibold">{t('width')}</div>
                            <div className="text-sm">{t('width_details')}</div>
                            <select className="text-black w-[170px]">
                                {widthOptions.map((item) => {
                                    return <option key={item.id}>{item.value}</option>;
                                })}
                            </select>
                            <div className="font-semibold">{t('height')}</div>
                            <div className="text-sm">{t('height_details')}</div>
                            <select className="text-black w-[170px]">
                                {heightOptions.map((item) => {
                                    return <option key={item.id}>{item.value}</option>;
                                })}
                            </select>
                            <div className="font-semibold">{t('radius')}</div>
                            <div className="text-sm">{t('radius_details')}</div>
                            <select className="text-black w-[170px]">
                                {radiusOptions.map((item) => {
                                    return <option key={item.id}>{item.value}</option>;
                                })}
                            </select>
                        </div>
                        <div className="flex justify-center items-center w-full py-1">
                            <Image
                                src={'/images/SOne_index_search.png'}
                                alt="tires_search"
                                height={24}
                                width={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
