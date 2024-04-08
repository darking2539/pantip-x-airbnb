import { useSelector } from "react-redux";
import { announcementListSelector } from "../../../store/selector/HomeContentSelector";
import { Announcement } from "../../../store/type/HomeContentType";
import { StarIcon, HeartIcon } from "../../../Icon";

type Props = {}


export default function AnnouncementList({ }: Props) {

    const announcementList = useSelector(announcementListSelector);

    return (
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg border-airbnb-gray max-w-[1280px] xl:min-w-[1280px]">
            <div>Announce</div>
            <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
                <div className=" pt-4 flex flex-col gap-4 overflow-x-auto">
                    {announcementList.map((value: Announcement, key: number) => {
                        return (
                            <div key={key} onClick={()=>{window.open(value.Url)}} className="flex items-center p-2 rounded-lg hover:bg-airbnb-accent group hover:text-white cursor-pointer">
                                <div className="flex">
                                    {value.Type == "Highlight" ? <StarIcon/>: <HeartIcon/>}
                                    <span className="ms-3">{value.Title}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}