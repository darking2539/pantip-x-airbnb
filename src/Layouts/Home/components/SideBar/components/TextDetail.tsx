

type Props = {
    text?: string;
    path: string;
}

export default function TextDetail({ text, path }: Props) {

    return (
        <a href={path} className="flex items-center pt-1 pl-2 rounded-lg hover:bg-airbnb-hover group">
            <span className="ms-1">{text}</span>
        </a>
    )
}