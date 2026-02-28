import { CartSummary } from "@/components/templates/website";


export default function Cart() {
  return (
    <div className='flex gap-10'>
      <div className='w-196'></div>
        <CartSummary />
    </div>
  )
}