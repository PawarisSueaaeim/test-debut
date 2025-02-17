import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default async function Footer({}: Props) {
    const t = await getTranslations('Homepage');
    return (
        <div className="flex">
            <Image
                src="/images/SOne_index_logos.png"
                alt="/images/SOne_index_logos.png"
                height={35}
                width={130}
            />
            <div className="flex items-center w-full rounded-md bg-black text-white text-[10px] px-1">{t('footer')}</div>
        </div>
    );
}
