export const log = (message: any, ...other: any[]) => {
  if (process.env.NODE_ENV !== 'production') console.log(message, ...other)
}
