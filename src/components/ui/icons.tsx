import { ComponentPropsWithoutRef } from 'react'

interface IconProps extends ComponentPropsWithoutRef<'svg'> {}

export const Icons = {
  arrow: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M5.8335 5.83331H14.1668V14.1666'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.8335 14.1666L14.1668 5.83331'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  arrowRight: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M15 6.66669L18.3333 10L15 13.3334'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.6665 10H18.3332'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  bank: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_2207_12288)'>
        <path
          d='M1.6665 7.14091C1.6665 6.1441 2.06849 5.5332 2.90036 5.07025L6.32473 3.16455C8.11909 2.16598 9.01625 1.66669 9.99984 1.66669C10.9834 1.66669 11.8806 2.16598 13.6749 3.16455L17.0993 5.07025C17.9312 5.5332 18.3332 6.1441 18.3332 7.14091C18.3332 7.41121 18.3332 7.54636 18.3037 7.65747C18.1486 8.24123 17.6196 8.33335 17.1088 8.33335H2.8909C2.38006 8.33335 1.8511 8.24122 1.69602 7.65747C1.6665 7.54636 1.6665 7.41121 1.6665 7.14091Z'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <path
          d='M9.99658 5.83331H10.0041'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M3.3335 8.33331V15.4166M6.66683 8.33331V15.4166' stroke='currentColor' strokeWidth='1.5' />
        <path d='M13.3335 8.33331V15.4166M16.6668 8.33331V15.4166' stroke='currentColor' strokeWidth='1.5' />
        <path
          d='M15.8332 15.4167H4.1665C2.7858 15.4167 1.6665 16.5359 1.6665 17.9167C1.6665 18.1468 1.85305 18.3334 2.08317 18.3334H17.9165C18.1466 18.3334 18.3332 18.1468 18.3332 17.9167C18.3332 16.5359 17.2139 15.4167 15.8332 15.4167Z'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>
      <defs>
        <clipPath id='clip0_2207_12288'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  card: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M1.6665 9.99998C1.6665 7.05208 1.6665 5.57812 2.54384 4.59406C2.68416 4.43667 2.83882 4.2911 3.00605 4.15904C4.05161 3.33331 5.61769 3.33331 8.74984 3.33331H11.2498C14.382 3.33331 15.9481 3.33331 16.9936 4.15904C17.1608 4.2911 17.3155 4.43667 17.4558 4.59406C18.3332 5.57812 18.3332 7.05208 18.3332 9.99998C18.3332 12.9479 18.3332 14.4218 17.4558 15.4059C17.3155 15.5633 17.1608 15.7088 16.9936 15.8409C15.9481 16.6666 14.382 16.6666 11.2498 16.6666H8.74984C5.61769 16.6666 4.05161 16.6666 3.00605 15.8409C2.83882 15.7088 2.68416 15.5633 2.54384 15.4059C1.6665 14.4218 1.6665 12.9479 1.6665 9.99998Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.3335 13.3333H9.5835'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.0835 13.3333H15.0002'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M1.6665 7.5H18.3332' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
    </svg>
  ),
  cartTwo: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.58366 6.66699H16.8303C17.351 6.66699 17.6113 6.66699 17.8019 6.75103C18.645 7.12274 18.2681 8.05928 18.1262 8.73233C18.1007 8.85324 18.0178 8.95616 17.9017 9.01133C17.4197 9.23999 17.0822 9.67374 16.9936 10.1782L16.4997 12.9902C16.2825 14.2274 16.2082 15.9956 15.124 16.8672C14.3285 17.5003 13.1823 17.5003 10.8899 17.5003H9.11074C6.81834 17.5003 5.67216 17.5003 4.87666 16.8672C3.79243 15.9955 3.71814 14.2274 3.50088 12.9902L3.00705 10.1782C2.91847 9.67374 2.58094 9.23999 2.099 9.01133C1.98279 8.95616 1.89993 8.85324 1.87444 8.73233C1.73261 8.05928 1.35566 7.12274 2.19876 6.75103C2.38936 6.66699 2.64968 6.66699 3.1703 6.66699H6.25033'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M11.6663 10H8.33301'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.41699 9.16667L8.33366 2.5M12.5003 2.5L14.5837 6.66667'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  ),
  cart: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M2.5 5H17.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M13.3332 8.33331C13.3332 9.21737 12.982 10.0652 12.3569 10.6903C11.7317 11.3155 10.8839 11.6666 9.99984 11.6666C9.11578 11.6666 8.26794 11.3155 7.64281 10.6903C7.01769 10.0652 6.6665 9.21737 6.6665 8.33331'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevron: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M5 7.5L10 12.5L15 7.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  circleCheck: (props: IconProps) => (
    <svg width='43' height='42' viewBox='0 0 43 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='2' y='1.5' width='39' height='39' rx='19.5' stroke='currentColor' strokeWidth='3' />
      <path
        d='M29.5 15L18.5 27L13.5 21.5455'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  circle: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle cx='10' cy='10' r='9.25' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  ),
  heart: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M16.2187 3.32846C13.9839 1.95769 12.0335 2.51009 10.8618 3.39001C10.3813 3.7508 10.1412 3.93119 9.99984 3.93119C9.8585 3.93119 9.61834 3.7508 9.13784 3.39001C7.96619 2.51009 6.01574 1.95769 3.78104 3.32846C0.848228 5.12745 0.184604 11.0624 6.94944 16.0695C8.23794 17.0232 8.88217 17.5 9.99984 17.5C11.1175 17.5 11.7618 17.0232 13.0503 16.0695C19.8151 11.0624 19.1514 5.12745 16.2187 3.32846Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  ),
  lock: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M10 13.75V12.0833' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M3.55667 15.7039C3.74407 17.0958 4.89694 18.1862 6.29988 18.2507C7.48039 18.305 8.67958 18.3333 10.0002 18.3333C11.3207 18.3333 12.5199 18.305 13.7004 18.2507C15.1034 18.1862 16.2562 17.0958 16.4437 15.7039C16.566 14.7956 16.6668 13.8647 16.6668 12.9167C16.6668 11.9687 16.566 11.0378 16.4437 10.1294C16.2562 8.7375 15.1034 7.64707 13.7004 7.58257C12.5199 7.52831 11.3207 7.5 10.0002 7.5C8.67958 7.5 7.48039 7.52831 6.29988 7.58257C4.89694 7.64707 3.74407 8.7375 3.55667 10.1294C3.43436 11.0378 3.3335 11.9687 3.3335 12.9167C3.3335 13.8647 3.43436 14.7956 3.55667 15.7039Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M6.25 7.50002V5.41669C6.25 3.34562 7.92893 1.66669 10 1.66669C12.0711 1.66669 13.75 3.34562 13.75 5.41669V7.50002'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  plus: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_2207_9339)'>
        <path
          d='M9.99984 6.66669V13.3334M13.3332 10H6.6665'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10Z'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>
      <defs>
        <clipPath id='clip0_2207_9339'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  remove: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_2207_9338)'>
        <path
          d='M13.3332 10H6.6665'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10Z'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>
      <defs>
        <clipPath id='clip0_2207_9338'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  search: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_2207_9348)'>
        <path
          d='M14.583 14.583L18.333 18.333'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.667 9.16699C16.667 5.02486 13.3092 1.66699 9.16699 1.66699C5.02486 1.66699 1.66699 5.02486 1.66699 9.16699C1.66699 13.3092 5.02486 16.667 9.16699 16.667C13.3092 16.667 16.667 13.3092 16.667 9.16699Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2207_9348'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  trash: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M16.25 4.58331L15.7336 12.9376C15.6016 15.072 15.5357 16.1392 15.0007 16.9066C14.7361 17.2859 14.3956 17.6061 14.0006 17.8466C13.2017 18.3333 12.1325 18.3333 9.99392 18.3333C7.8526 18.3333 6.78192 18.3333 5.98254 17.8457C5.58733 17.6047 5.24667 17.284 4.98223 16.904C4.4474 16.1355 4.38287 15.0667 4.25384 12.9293L3.75 4.58331'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M2.5 4.58335H17.5M13.3797 4.58335L12.8109 3.4098C12.433 2.63024 12.244 2.24045 11.9181 1.99736C11.8458 1.94344 11.7693 1.89547 11.6892 1.85394C11.3283 1.66669 10.8951 1.66669 10.0287 1.66669C9.14067 1.66669 8.69667 1.66669 8.32973 1.86179C8.24842 1.90503 8.17082 1.95494 8.09774 2.011C7.76803 2.26394 7.58386 2.66798 7.21551 3.47607L6.71077 4.58335'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M7.9165 13.75V8.75' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path d='M12.0835 13.75V8.75' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  ),
  user: (props: IconProps) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M15.8332 17.5V15.8333C15.8332 14.9493 15.482 14.1014 14.8569 13.4763C14.2317 12.8512 13.3839 12.5 12.4998 12.5H7.49984C6.61578 12.5 5.76794 12.8512 5.14281 13.4763C4.51769 14.1014 4.1665 14.9493 4.1665 15.8333V17.5'
        stroke='currentColor'
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.99984 9.16667C11.8408 9.16667 13.3332 7.67428 13.3332 5.83333C13.3332 3.99238 11.8408 2.5 9.99984 2.5C8.15889 2.5 6.6665 3.99238 6.6665 5.83333C6.6665 7.67428 8.15889 9.16667 9.99984 9.16667Z'
        stroke='currentColor'
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
