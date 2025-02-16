'use server';

import { cookies } from "next/headers";

export const setCookie = async (cname: string, value: any, expires: number) => {
    console.log("setting", cname, value, expires);
    const cookieStore = await cookies();
    const date = new Date();
    date.setTime(date.getTime() + (expires*24*60*60*1000));
    cookieStore.set(cname, value, {expires: date});
};