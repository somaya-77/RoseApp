"use client";

// import { Button } from "../ui/button";
// import { TableCell } from "../ui/table";
// import { Pencil, Trash2 } from "lucide-react";
// import DropdownActionMenu from "./dropdown-actions";
import Link from "next/link";
import DeleteConfirm from "./confirm-delete";

interface Props {
    editPath: string;
}

export default function Actions({ editPath }: Props) {
    // mutations
    const onDeleteSuccess = () => {

    }
    const item = {
        id: 151474448
    }
    // delete
    // edit

    const isMobile = false;
return (<></>)
    // return (
    //     <>
    //         {isMobile ? (
    //             // dropdown menu
    //             <TableCell className="text-right px-6 space-x-2">
    //                 <DropdownActionMenu editPath={editPath} />
    //             </TableCell>
    //         ) : (
    //             <TableCell className="text-right px-6 space-x-2">
    //                 <Link href={editPath}>
    //                     <Button variant="ghost" size="sm" className="text-blue-600 bg-blue-50">
    //                         <Pencil className="w-3 h-3" /> Edit
    //                     </Button>
    //                 </Link>

    //                 <DeleteConfirm
    //                     category={item}
    //                     onDeleteSuccess={onDeleteSuccess}
    //                 />

    //             </TableCell>
    //         )}
    //     </>
    // )
}