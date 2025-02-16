import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
    const storeCookie = await cookies();
    const locale = storeCookie.get("i18next")?.value || 'th';

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
