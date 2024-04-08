
import { MenuIcon, PantipIcon, CommunityIcon, UserIcon, AddMessageIcon } from '../../../../Icon'
import SearchBar from './components/SearchBar'

type Props = {
    menuClick?: () => void;
}

export default function Header({ menuClick }: Props) {
    
    return (
        <nav className='flex-no-wrap fixed relative top-0 sticky bg-white py-2 z-10'>
            <div className='flex justify-between mx-6'>
                <div className='flex items-center'>
                    <div className='flex md:hidden cursor-pointer' onClick={menuClick}>
                        <MenuIcon className='fill-black h-[30px] w-[60px]' />
                    </div>
                    <div >
                        <PantipIcon className='fill-airbnb-pink h-[60px] w-[60px]' />
                    </div>
                </div>

                <div className='grid items-center w-[45%]'>
                    <div className='hidden md:grid'>
                        <SearchBar/>
                    </div>
                </div>

                <div className="flex gap-6 gap-10 items-center">
                    <div className='flex cursor-pointer h-full items-center hover:scale-125'>
                        <AddMessageIcon className='mr-1'/>
                        <div className='hidden lg:flex font-sans text-airbnb-dark font-bold'>ตั้งกระทู้</div>
                    </div>
                    <div className='flex cursor-pointer h-full items-center hover:scale-125'>
                        <CommunityIcon className='mr-1'/>
                        <div className='hidden lg:flex font-sans text-airbnb-dark font-bold'>คอมมูนิตี้</div>
                    </div>
                    <div className='flex cursor-pointer h-full items-center hover:scale-125'>
                        <UserIcon className='lg:hidden mr-1'/>
                        <div className='hidden lg:flex font-sans text-airbnb-dark font-bold'>เข้าสู่ระบบ/สมัครสมาชิก</div>
                    </div>
                </div>

            </div>
        </nav>
    )
}