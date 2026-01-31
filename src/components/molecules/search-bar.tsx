import {Icon} from "@/components";


export default function Searchbar() {

    return (
        <div className="relative w-full dark:bg-zinc-700 rounded-xl">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 dark:text-zinc-50" />
            <input
                type="text"
                placeholder="What awesome gift are you looking for?"
                className="w-full h-13 rounded-xl border border-zinc-300 dark:border-zinc-600 pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-0 focus:border-zinc-300"
            />
        </div>
    )
}