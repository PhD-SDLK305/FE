import {
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'

export function AuthHeader({ handleNavigate, currentPage, navigateTo, desciption }) {
  return (
    <CardHeader className='pb-4 space-y-3'>
      <div className='flex justify-between items-center'>
        <CardTitle className='text-2xl font-bold'>
          {currentPage}
        </CardTitle>
        <CardAction>
          <Button variant='link' className='font-medium' handleClick={handleNavigate}>
            {navigateTo}
          </Button>
        </CardAction>
      </div>
      <CardDescription>
        {desciption}
      </CardDescription>
    </CardHeader>
  )
}