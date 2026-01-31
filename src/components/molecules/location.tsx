import {Button, Icon} from "@/components";



export default function Location() {

    return (
        <div className="w-28">
            <p className="text-zinc-500">Deliver to:</p>
            <button className="text-softPink-200 flex gap-2">
                <Icon name="LocationEdit" />
                Alexandria
            </button>
        </div>
    )
}