import { memo } from 'react'

export const CheckIcon = memo(({ className }) => (
    <svg
        className={className}
        width="12px"
        height="9.6px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 8"
    >
        <path
            d="M3.88632 5.95189L8.77465 0.915431C8.96697 0.717276 9.28352 0.712552 9.48168 0.904878L9.67738 1.09483C9.87553 1.28715 9.88026 1.6037 9.68793 1.80185L4.34296 7.3088C4.093 7.56633 3.67963 7.56633 3.42967 7.3088L0.948335 4.75227C0.756009 4.55411 0.760734 4.23757 0.958888 4.04524L1.15459 3.85529C1.35275 3.66297 1.66929 3.66769 1.86162 3.86584L3.88632 5.95189Z"
            fill="currentColor"
        ></path>
    </svg>
))

export const DropDownIcon = memo(({ className }) => (
    <svg
        className={className}
        width="30px"
        height="30px"
        fill="#B0B0B4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7125 32.0323C24.3109 32.5525 23.5252 32.5505 23.1263 32.0282L14.4015 20.6071C13.8988 19.949 14.368 19 15.1962 19H32.7385C33.569 19 34.0375 19.9537 33.53 20.6111L24.7125 32.0323Z"
        ></path>
    </svg>
))

export const ArrowUpIcon = memo(({ className }) => (
    <svg
        className={className}
        width="14px"
        height="14px"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.5187 35.2284C24.7205 36.1596 23.2798 36.1596 22.4816 35.2284L8.83008 19.3016C7.71807 18.0042 8.63988 16 10.3486 16H37.6517C39.3604 16 40.2822 18.0042 39.1702 19.3016L25.5187 35.2284Z"
        ></path>
    </svg>
))
