import {useTranslations} from 'next-intl'
export default function Home() {
    const t = useTranslations('Index')
    return (
        <div className='container mx-auto'>
            <h3 className='text-center'>{t("title")}</h3>
            <p className='text-center'>{t("description")}</p>
        </div>
    )
}
