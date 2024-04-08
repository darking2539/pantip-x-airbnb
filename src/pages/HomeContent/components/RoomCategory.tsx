type Props = {
    Icon: JSX.Element;
    text: string;
    path: string;
}


export default function RoomCategory(props: Props) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer border-transparent text-neutral-500">
            {props.Icon}
            <div className="font-medium text-sm">{props.text}</div>
        </div>
    )
}