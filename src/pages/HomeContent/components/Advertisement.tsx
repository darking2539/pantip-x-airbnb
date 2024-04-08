import { useSelector } from "react-redux";
import { advertiseImageSelector } from "../../../store/selector/HomeContentSelector";

type Props = {}


export default function Advertisment({ }: Props) {
    
    const roomCategoryList = useSelector(advertiseImageSelector);
    return (
        <div className="flex items-center justify-center mb-5">
            <img src={roomCategoryList} />
        </div>
    )
}