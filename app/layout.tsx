import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Menu from '@/components/layout/menu';
import Footer from '@/components/layout/footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const message = await getMessages();

    return (
        <html lang={locale}>
            <NextIntlClientProvider messages={message}>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} flex flex-col gap-3 antialiased`}
                >
					<div>
						<Header local={locale} />
						<Menu/>
					</div>
                    {children}
					<Footer/>
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
