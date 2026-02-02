import OTPForm from "@/components/templates/auth/otp-form"


export default async function Page(props: { 
  searchParams: Promise<{ email?: string | null}> 
}){ 
    const searchParams = await props.searchParams;
  const email = searchParams.email;
  return (<OTPForm email={email}/>)
}

