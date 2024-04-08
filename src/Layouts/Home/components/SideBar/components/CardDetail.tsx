

type Props = {
    Icon?: JSX.Element;
    text?: string;
    path: string;
}

export default function CardDetail({ Icon, text, path }: Props) {

    return (
        <a href={path} className="flex items-center p-2 rounded-lg hover:bg-airbnb-pink group hover:text-white">
            {Icon}
            <span className="ms-3">{text}</span>
        </a>
    )
}