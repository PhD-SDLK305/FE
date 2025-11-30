import { toast } from 'react-toastify'

export const handleToastMessage = (message, type) => {
  toast[type](message)
}