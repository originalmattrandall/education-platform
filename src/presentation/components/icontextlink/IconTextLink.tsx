import './IconTextLink.scss'

interface IconTextLinkParams {
    text: string,
    link: string,
    icon: React.ReactNode,
    active: boolean
}

export const IconTextLink = ({text, link, icon, active}: IconTextLinkParams) => {
    return <div className={`icon-text-link ${active ? 'active' : ''}`}>
        <div className={`icon-text-link__icon ${active ? 'active' : ''}`}> {icon} </div>
        <a href={link}> {text} </a>
    </div>
}