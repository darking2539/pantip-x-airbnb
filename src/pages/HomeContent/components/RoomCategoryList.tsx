import { useSelector } from "react-redux"
import RoomCategory from "./RoomCategory"
import { roomCategoryListInitSelector } from "../../../store/selector/HomeContentSelector"
import { roomCategory } from "../../../store/type/HomeContentType";


type Props = {}

export default function RoomCategoryList({ }: Props) {

    const roomCategoryList = useSelector(roomCategoryListInitSelector);
    return (
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg border-airbnb-gray max-w-[1280px]">
            <div>เลือกห้อง</div>
            <div className=" max-w-[2520px] mx-auto xl:px-20  md:px-10 sm:px-2 px-4">
                <div className=" pt-4 flex  flex-row items-center justify-between overflow-x-auto">
                    {roomCategoryList.map((data: roomCategory, key: number) => {
                        return (
                                <RoomCategory
                                    key={key}
                                    Icon={data.Icon}
                                    text={data.Title}
                                    path={data.Path || ""} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}