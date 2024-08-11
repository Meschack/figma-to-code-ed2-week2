import { ClientError } from 'graphql-request'

export const log = (message: any, ...other: any[]) => {
  if (process.env.NODE_ENV !== 'production') console.log(message, ...other)
}

export const logClientError = (error: ClientError) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(error.response.errors?.map(error => error.message).join('\n'))
  }
}
