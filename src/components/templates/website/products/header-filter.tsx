import {ResetFilter} from "..";

export default function HeaderFilter({ filter }: { filter: string }) {

    return (
        <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg capitalize">{filter}</h3>
            <ResetFilter filter={filter} />
        </div>
    )
}