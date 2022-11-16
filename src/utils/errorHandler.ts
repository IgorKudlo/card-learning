import axios, { AxiosError } from 'axios';

export const errorHandler = (error: unknown) => {
  const err = error as Error | AxiosError<{ error: string }>
  if (axios.isAxiosError(err)) {
    const errorText = err.response?.data ? err.response.data.error : err.message;
    alert(errorText)
    //dispatch(setAppErrorAC(errorText))
  } else {
    alert(err.message)
    //dispatch(setAppErrorAC(`Native error ${err.message}`))
  }
}