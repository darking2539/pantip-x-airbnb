import { useDispatch, useSelector } from 'react-redux';
import { Advertisement, RoomCategoryList, Announcement, HighLight } from "./components"
import { useEffectOnce } from '../../libs/hooks';
import { useCallback } from 'react';
import { HomeContentAction } from '../../store/actions';
import { sideBarOpenSelector } from '../../store/selector/LayoutHomeSelector';

type Props = {}

export default function HomeContent({ }: Props) {

    const dispatch = useDispatch();
    const sideBarOpen = useSelector(sideBarOpenSelector);

    const handleInitStageLoaded = useCallback(() => {
        dispatch(HomeContentAction.initHomeContentInfo(null));
    }, [dispatch]);

    useEffectOnce(() => {
        handleInitStageLoaded();
    });

    return (
        <div>
            {/* <div style={{top: "0px", right: "0px", position: "fixed", zIndex: 2, backgroundColor: "rgba(0, 0, 0, 0.4)", width: "100%", height: "100%"}} /> */}
            {sideBarOpen && <div className={`fixed top-0 right-0 z-2 bg-black bg-opacity-40 w-[100%] h-[100%]`} />}
            <div className={`flex flex-col p-4 md:ml-64`}>
                <div className={`flex flex-col gap-2 xl:justify-center xl:items-center`}>
                    <Advertisement />
                    <Announcement />
                    <RoomCategoryList />
                    <HighLight />
                </div>
            </div>
        </div>
    )
}