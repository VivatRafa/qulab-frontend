import useSWR from "swr";

export const useUserData = () => {
    const res = useSWR('userInfo', async () => {
        const resp = await kyFetch.get('users').json();

        const { last_aсtivity, registration_date } = resp;
        const lastActivity = dayjs(last_aсtivity).format('DD.MM.YYYY');
        const registrationDate = dayjs(registration_date).format('DD.MM.YYYY HH:mm');

        return { ...resp, lastActivity, registrationDate };
    });

    return res;
}