import {useTranslations} from 'next-intl'
export default function About (){
    const t = useTranslations("About")
    return (
        <div className='mx-auto'>
        <h3 className='text-center'>{t("title")}</h3>
        <p className='text-center'>{t('description')}</p>
        </div>
    )
}