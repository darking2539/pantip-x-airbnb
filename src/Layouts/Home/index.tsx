import { useCallback } from 'react';
import { Footer, Header, SideBar } from "./components"
import { useDispatch } from 'react-redux';
import { LayoutHomeAction } from '../../store/actions';
import { useEffectOnce } from '../../libs/hooks';


type Props = {
    Content: JSX.Element;
}

export default function Home(props: Props) {

    const dispatch = useDispatch();

    const menuClick = () => {
        dispatch(LayoutHomeAction.clickHamburger(true));
    };

    const handleInitStageLoaded = useCallback(() => {
        dispatch(LayoutHomeAction.initBoardInfo(null));
    }, [dispatch]);

    useEffectOnce(() => {
        handleInitStageLoaded();
    });

    return (
        <>
            <Header
                menuClick={menuClick} />
            <SideBar />
            {props.Content}
            <Footer />
        </>
    )
}