import { useSelector } from "react-redux";
import { highlightListSelector } from "../../../store/selector/HomeContentSelector";
import { Highlight } from "../../../store/type/HomeContentType";

type Props = {}


export default function HighLight({ }: Props) {

    const highlightList = useSelector(highlightListSelector);

    return (
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg border-airbnb-gray xl:max-w-[1000px] 2xl:max-w-[1280px]">
            <div>Highlight</div>
            <div className="max-w-[2520px] mx-auto xl:px-20  md:px-10 sm:px-2 px-4">
                <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto gap-5">
                    {highlightList.map((data: Highlight, key: number) => {
                        return (
                            <div key={key}>
                                <div className="flex justify-center">
                                    <img src={data.Img} className="hover:scale-125 cursor-pointer" />
                                </div>
                                <div className="text-lg line-clamp-3 p-1">
                                    {data.Title}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}