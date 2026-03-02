import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import UserDropDown from "../organism/user-dropdown";
import InfoUser from "../organism/info-user";


export default async function User() {
const session = await getServerSession(authOptions);
    return (
  <>
          {session?.user ? (
            <UserDropDown initialData={session} />
          ) : (
            <InfoUser initialData={session}/>
          )}
  </>
    )
}