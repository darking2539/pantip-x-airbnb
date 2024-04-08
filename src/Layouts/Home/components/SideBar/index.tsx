import { CardDetail, TextDetail } from './components';
import { useSelector } from 'react-redux';
import { mainMenuSelector, subMenuSelector, sideBarOpenSelector, detailDataSelector } from "../../../../store/selector/LayoutHomeSelector";
import { MenuInterface } from '../../../../store/type/LayoutHomeType';


type Props = {}

export default function SideBar({ }: Props) {

    const menuOpen = useSelector(sideBarOpenSelector);
    const mainMenu = useSelector(mainMenuSelector);
    const subMenu = useSelector(subMenuSelector);
    const detailData = useSelector(detailDataSelector);

    return (
        <aside id="default-sidebar"
            className={`fixed top-50 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0 ${menuOpen ? "translate-x-0 bg-white" : ""}`} >
            <div className="h-full px-3 py-4 overflow-y-auto ">
                <ul className="space-y-2 font-medium">
                    {mainMenu.map((data: MenuInterface, key: number) => {
                        return (
                            <li key={key}>
                                <CardDetail
                                    text={data.Title}
                                    Icon={data.Icon}
                                    path={data.Path} />
                            </li>
                        )
                    })}
                </ul>
                <hr className="solid my-5 border-[1.5px]" />
                <ul className="space-y-2 font-medium">
                    {subMenu.map((data: any, key: number) => {
                        return (
                            <li key={key}>
                                <CardDetail
                                    text={data.Title}
                                    Icon={data.Icon}
                                    path={data.Path} />
                            </li>
                        )
                    })}
                </ul>
                <hr className="solid my-5 border-[1.5px]" />
                <ul className="space-y-2 text-sm font-normal">
                    {detailData.map((data: any, key: number) => {
                        return (
                            <li key={key}>
                                <TextDetail
                                    text={data.Title}
                                    path={data.Path} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}