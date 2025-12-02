import { Button } from '../../../components/ui/button'
import googleIcon from '../../../assets/google.svg'
export function AuthFooter({ handleClick, type, title }) {
  return (
    <>
      <Button handleClick={handleClick} type={type} className="font-inter group/button inline-flex items-center justify-center whitespace-nowrap [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 data-[loading=true]:pointer-events-none data-[loading=true]:select-none data-[shape='pill']:rounded-full text-inverted bg-primary border border-transparent hover:bg-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-tertiary-hover disabled:bg-primary-disabled disabled:cursor-not-allowed disabled:text-quaternary-solid typography-caption-l-medium px-3 h-10 gap-2 data-[shape='rounded']:rounded-xl [&_svg:not([class*='size-'])]:size-[18px] text-sm/[20px] font-medium tracking-[-0.1px] w-full">{title}</Button>
      <Button className="font-inter group/button inline-flex items-center justify-center whitespace-nowrap [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 data-[loading=true]:pointer-events-none data-[loading=true]:select-none data-[shape='pill']:rounded-full bg-button-secondary border border-action-normal hover:border-action-hover hover:bg-button-secondary-hover outline-none focus-visible:ring-2 focus-visible:ring-tertiary-hover focus-visible:border-secondary disabled:bg-button-secondary disabled:cursor-not-allowed disabled:border-primary-disabled disabled:text-quaternary typography-caption-l-medium px-3 h-10 gap-2 data-[shape='rounded']:rounded-xl [&_svg:not([class*='size-'])]:size-[18px] text-sm/[20px] font-medium tracking-[-0.1px] w-full text-secondary !font-normal">
        <img src={googleIcon} width={15} alt="google" /> Login with Google
      </Button>
      <div class="text-sm text-secondary underline-offset-[3px]">By signing up, you agree to the <a href="https://mintlify.com/legal/terms" class="underline hover:dark:text-white/70 hover:dark:decoration-white/70" target="_blank">Terms of Service</a> and <a href="https://mintlify.com/legal/privacy" class="underline hover:dark:text-white/70 hover:dark:decoration-white/70" target="_blank">Privacy Policy</a>.</div>
    </>
  )
}