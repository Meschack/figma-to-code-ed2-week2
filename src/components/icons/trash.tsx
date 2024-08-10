import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

export const Trash = ({ width = 20, height = 20, stroke, ...rest }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      {...rest}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.25 4.58331L15.7336 12.9376C15.6016 15.072 15.5357 16.1392 15.0007 16.9066C14.7361 17.2859 14.3956 17.6061 14.0006 17.8466C13.2017 18.3333 12.1325 18.3333 9.99392 18.3333C7.8526 18.3333 6.78192 18.3333 5.98254 17.8457C5.58733 17.6047 5.24667 17.284 4.98223 16.904C4.4474 16.1355 4.38287 15.0667 4.25384 12.9293L3.75 4.58331'
        stroke='#1D1D1D'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M2.5 4.58335H17.5M13.3797 4.58335L12.8109 3.4098C12.433 2.63024 12.244 2.24045 11.9181 1.99736C11.8458 1.94344 11.7693 1.89547 11.6892 1.85394C11.3283 1.66669 10.8951 1.66669 10.0287 1.66669C9.14067 1.66669 8.69667 1.66669 8.32973 1.86179C8.24842 1.90503 8.17082 1.95494 8.09774 2.011C7.76803 2.26394 7.58386 2.66798 7.21551 3.47607L6.71077 4.58335'
        stroke='#1D1D1D'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M7.9165 13.75V8.75'
        stroke='#1D1D1D'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M12.0835 13.75V8.75'
        stroke='#1D1D1D'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}