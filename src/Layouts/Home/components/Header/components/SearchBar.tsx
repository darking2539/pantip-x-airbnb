import { SearchIcon } from "../../../../../Icon"

type Props = {}

export default function SearchBar({ }: Props) {
    return (
        <form className="relative">
            <div className="flex items-center">
                <input 
                    type="text" 
                    className="mt-1 block w-full p-4 py-3 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                    placeholder="ค้นหาบนพันทิป"/>
                <div className="absolute inset-y-0 end-0 flex items-center pr-3 pointer-events-none">
                    <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                </div>
            </div>
        </form>
    )
}