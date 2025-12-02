import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/ui/button'
import {
  FormDescription,
  FormLabel
} from '../../../components/ui/form'

export function AuthHeader({ naviagteTo, title, navigateTo, snippet }) {
  const naviagte = useNavigate()
  return (
    <>
      <svg width="502" height="502" viewBox="0 0 502 502" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-8 mb-6"><path d="M501.413 185.636V30.2677C501.413 13.5952 487.887 0.305481 471.463 0.305481H316.167C291.774 0.305481 267.622 5.13791 245.161 14.3199C222.699 23.7435 202.17 37.2749 185.023 54.6723L183.815 55.8805C161.112 78.8354 144.93 107.348 136.719 138.76C151.451 134.893 166.666 132.96 181.882 132.719C222.457 132.236 262.308 145.284 294.672 169.688C323.896 191.435 346.115 221.397 358.191 255.95C370.75 290.987 372.199 329.165 362.78 365.167C393.936 356.952 422.677 340.763 445.621 318.05L446.829 316.841C463.977 299.686 477.743 279.147 487.162 256.675C496.581 234.204 501.171 210.041 501.171 185.636H501.413Z" fill="#18E299"></path><path d="M132.082 183.012C132.323 135.349 151.331 89.6123 184.775 55.4301L55.5676 184.697C55.0864 185.178 54.6049 185.419 54.1237 185.9C22.6039 217.194 3.59626 259.079 0.468338 303.372C-2.41897 344.776 8.40821 385.698 31.5067 419.88C33.7099 423.141 39.6881 424.213 43.0566 421.084L122.217 342.128C147 317.333 154.699 280.503 142.909 247.525C135.451 227.063 131.841 205.158 132.082 183.012Z" fill="#0C8C5E"></path><path d="M446.078 316.852C421.295 341.165 390.256 358.015 356.571 365.478C322.645 372.94 287.516 370.774 254.793 359.219C254.793 359.219 254.552 359.219 254.312 359.219C221.348 347.424 184.536 355.127 159.753 379.68L80.5915 458.637C77.223 462.007 77.7042 467.543 81.7946 470.191C115.961 493.059 156.866 504.133 198.25 501.244C242.522 498.115 284.147 479.098 315.667 447.563L316.87 446.36L446.078 317.093V316.852Z" fill="#0C8C5E"></path></svg>
      <FormLabel className='text-xl'>{title}</FormLabel>
      <FormDescription className='mb-10'>
        {snippet}
        {navigateTo && <Button variant='link' className='font-medium ml-0 text-green-500' handleClick={() => {naviagte(naviagteTo)}}>
          {navigateTo}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </Button>}
      </FormDescription>
    </>
  )
}