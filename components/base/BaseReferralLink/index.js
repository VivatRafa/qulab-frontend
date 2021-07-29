import { useEffect, useState } from "react"
import { copyTextToClipboard } from 'utils';
import { useUserInfo } from 'hooks';

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
                <img src="img/money4.svg" alt="" />
                <span className="purpur opacity">Реферальная ссылка</span>
            </div>
            <div className="referal-link">{refLink}</div>
            {/* eslint-disable */}
            <a className="button1" onClick={() => copyTextToClipboard(refLink)}>Скопировать ссылку</a>
        </div>
    )
}

export default BaseReferralLink;