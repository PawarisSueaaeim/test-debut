import Banner from '@/components/ui/banner';
import Product from '@/components/ui/product';
import PromoNewsSafe from '@/components/ui/promoNewsSafe';
import Tires from '@/components/ui/tires';
import React from 'react';

type Props = {};

export default function SafetyTips({}: Props) {
    return (
        <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 min-[1080px]:grid-cols-2 gap-3">
                <div>
                    <Tires />
                </div>
                <div>
                    <Banner />
                </div>
            </div>
            <Product />
            <PromoNewsSafe />
        </div>
    );
}
