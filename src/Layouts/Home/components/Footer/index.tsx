import { AddMessageIcon, CommunityIcon, HomeIcon, MailBoxIcon, BellIcon } from "../../../../Icon"

type Props = {}

function Footer({ }: Props) {
    return (
        <div className="md:hidden flex-no-wrap fixed relative bottom-0 sticky bg-white py-5 z-10">
            <div className="flex gap-10 gap-10 items-center justify-center">
                <div className='flex cursor-pointer h-full items-center'>
                    <HomeIcon className='mr-1 scale-150' />
                </div>
                <div className='flex cursor-pointer h-full items-center'>
                    <CommunityIcon className='mr-1 scale-150' />
                </div>
                <div className='flex cursor-pointer h-full items-center'>
                    <AddMessageIcon className='mr-1 scale-150' />
                </div>
                <div className='flex cursor-pointer h-full items-center'>
                    <MailBoxIcon className='mr-1 scale-150' />
                </div>
                <div className='flex cursor-pointer h-full items-center'>
                    <BellIcon className='mr-1 scale-150' />
                </div>
            </div>
        </div>
    )
}

export default Footer