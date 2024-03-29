import { useEffect, useState } from "react"
import { copyTextToClipboard } from 'utils';
import { useUserInfo } from 'hooks';
import Image from "next/image";

const BaseReferralLink = () => {
    const [user] = useUserInfo();
    const [refLink, setRefLink] = useState('');

    const { id } = user || {};

    useEffect(() => {
        setRefLink(`${window.location.origin}/cabinet/registration/?ref=${id}`)
    }, [])

    return (
        <div>
            <div className="money-item-title">
                <Image src="/static/img/money4.svg" alt="" width="36" height="36" />
                <span className="purpur opacity">Реферальная ссылка</span>
            </div>
            <div className="referal-link">{refLink}</div>
            {/* eslint-disable */}
            <a className="button1" onClick={() => copyTextToClipboard(refLink)}>Скопировать ссылку</a>
        </div>
    )
}

export default BaseReferralLink;