import Banner from '@/components/ui/banner';
import Menu from '@/components/ui/menu';
import Product from '@/components/ui/product';
import PromoNewsSafe from '@/components/ui/promoNewsSafe';
import Tires from '@/components/ui/tires';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Home() {
    const t = await getTranslations('Homepage');

    return (
        <div className='flex flex-col gap-3'>
			<Menu/>
			<div className='grid grid-cols-1 min-[1080px]:grid-cols-2 gap-3'>
				<div><Tires/></div>
				<div><Banner/></div>
			</div>
			<Product/>
			<PromoNewsSafe/>
        </div>
    );
}
