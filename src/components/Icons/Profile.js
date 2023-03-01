import { forwardRef } from 'react'

export const SharedIcon = forwardRef(({ className, width = '24px', height = '24px', color = '#fff' }, ref) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        width={width}
        height={height}
        fill={color}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.5546 8.35111L13.3171 8.16468V7.37972V3.50006L21.4998 12.0001L13.3171 20.5001V16.3738V15.3664L12.3098 15.3738C8.838 15.3994 5.4275 17.0466 2.49983 19.5882C2.54612 19.2536 2.67769 18.641 2.94391 17.8329C3.3786 16.5132 4.01326 15.1988 4.88691 13.971C6.71045 11.4083 9.24414 9.16046 12.5546 8.35111Z"
            stroke="#161823"
            strokeWidth="2"
        ></path>
    </svg>
))

export const UserMoreIcon = forwardRef(({ className, width = '24px', height = '24px', color = '#000' }, ref) => (
    <svg
        width={width}
        className={className}
        height={height}
        viewBox="0 0 48 48"
        fill={color}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24ZM20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24ZM36 24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28C37.7909 28 36 26.2091 36 24Z"
        ></path>
    </svg>
))

export const SendMessageIcon = ({ className, width = '16px', height = '16px', color = 'currentColor' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.09751 6.63192C4.27438 6.24712 4.66288 6 5.09093 6H26.9091C27.298 6 27.6574 6.20436 27.8526 6.53639C28.0478 6.86842 28.0492 7.27791 27.8563 7.61122L16.9472 26.4574C16.7322 26.8288 16.3148 27.0394 15.8839 26.9939C15.453 26.9483 15.0902 26.6553 14.9597 26.2474L11.7558 16.2317L4.26993 7.78608C3.98806 7.46807 3.92063 7.01672 4.09751 6.63192ZM14.0238 16.1691L16.2896 23.2521L25.0293 8.15384H7.49503L12.941 14.298L19.3274 10.4183C19.5839 10.2624 19.9199 10.3414 20.0778 10.5947L20.6495 11.5118C20.8074 11.7651 20.7274 12.0968 20.4708 12.2526L14.0238 16.1691Z"
        ></path>
    </svg>
)

export const ReportIcon = ({ className, width = '16px', height = '16px', color = 'currentColor' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 9.31286V27.0626C9.98685 26.7378 11.184 26.4042 12.5108 26.1585C16.1115 25.4917 21.0181 25.4123 25.1625 28.3726C28.0181 30.4123 31.6115 30.4917 34.7608 29.9085C36.306 29.6223 37.6602 29.1908 38.6289 28.8293C38.7603 28.7803 38.8841 28.7328 39 28.6872V10.9374C38.0131 11.2623 36.816 11.5959 35.4892 11.8416C31.8885 12.5084 26.9819 12.5878 22.8375 9.62751C19.9819 7.58781 16.3885 7.5084 13.2392 8.09161C11.694 8.37776 10.3398 8.80927 9.37105 9.17072C9.23971 9.21973 9.11586 9.2673 9 9.31286ZM40.1067 6.21064C40.7264 5.90123 41.4622 5.93453 42.0515 6.29874C42.6411 6.66315 43 7.30688 43 8.00004V30C43 30.7576 42.572 31.4501 41.8944 31.7889L41 30C41.8944 31.7889 41.8931 31.7895 41.8931 31.7895L41.8916 31.7903L41.8878 31.7922L41.8775 31.7973L41.846 31.8127C41.831 31.82 41.8128 31.8288 41.7915 31.839C41.7761 31.8464 41.7589 31.8545 41.7401 31.8634C41.651 31.9055 41.525 31.9637 41.3654 32.0343C41.0466 32.1753 40.5919 32.3663 40.0273 32.577C38.9023 32.9967 37.319 33.5027 35.4892 33.8416C31.8885 34.5084 26.9819 34.5878 22.8375 31.6275C19.9819 29.5878 16.3885 29.5084 13.2392 30.0916C11.694 30.3778 10.3398 30.8093 9.37105 31.1707C9.23971 31.2197 9.11586 31.2673 9 31.3129V44.0001C9 44.5524 8.55228 45.0001 8 45.0001H6C5.44772 45.0001 5 44.5524 5 44.0001V8.00004C5 7.24249 5.42801 6.54996 6.10558 6.21118L7 8.00004C6.10558 6.21118 6.10688 6.21053 6.10688 6.21053L6.10842 6.20976L6.11219 6.20789L6.12249 6.20279L6.15404 6.18734C6.17988 6.17477 6.21529 6.15773 6.25987 6.13667C6.34902 6.09457 6.47498 6.03636 6.63455 5.9658C6.95342 5.8248 7.4081 5.63378 7.9727 5.42311C9.09774 5.00332 10.681 4.49734 12.5108 4.15849C16.1115 3.49171 21.0181 3.4123 25.1625 6.37257C28.0181 8.41227 31.6115 8.49167 34.7608 7.90846C36.306 7.62231 37.6602 7.1908 38.6289 6.82935C39.1112 6.6494 39.4925 6.48886 39.7478 6.37595C39.8754 6.31956 39.9711 6.27523 40.0318 6.24653C40.0622 6.23219 40.0838 6.22177 40.0962 6.21572L40.1056 6.21118L40.1067 6.21064Z"
        ></path>
    </svg>
)

export const BlockIcon = ({ className, width = '16px', height = '16px', color = 'none' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="black"
            fillRule="evenodd"
            stroke="black"
            strokeWidth="0.75"
            d="M4.48 3.994l7.526 7.527A5.333 5.333 0 004.48 3.994zm7.056 8l-7.53-7.53a5.333 5.333 0 007.529 7.529zM3.765 3.75a6 6 0 118.47 8.5 6 6 0 01-8.47-8.5z"
            clipRule="evenodd"
        ></path>
    </svg>
)

export const LockLikeIcon = ({ className, width = '18px', height = '18px', color = 'currentColor' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 3C17.9249 3 13 7.92487 13 14V21H8C6.89543 21 6 21.8954 6 23V41C6 42.1046 6.89543 43 8 43H40C41.1046 43 42 42.1046 42 41V23C42 21.8954 41.1046 21 40 21H35V14C35 7.92487 30.0751 3 24 3ZM31 21V14C31 10.134 27.866 7 24 7C20.134 7 17 10.134 17 14V21H31Z"
        ></path>
    </svg>
)

export const VideoProfileIcon = ({ className, width = '18px', height = '18px', color = '#fff' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 10.554V37.4459L38.1463 24L16 10.554ZM12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"
        ></path>
    </svg>
)
export const LockProfileIcon = ({ className, width = '90px', height = '90px', color = 'currentColor' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 8.5C20.9624 8.5 18.5 10.9624 18.5 14V18.5H29.5V14C29.5 10.9624 27.0376 8.5 24 8.5ZM32.5 18.5V14C32.5 9.30558 28.6944 5.5 24 5.5C19.3056 5.5 15.5 9.30558 15.5 14V18.5H11C9.61929 18.5 8.5 19.6193 8.5 21V40C8.5 41.3807 9.61929 42.5 11 42.5H37C38.3807 42.5 39.5 41.3807 39.5 40V21C39.5 19.6193 38.3807 18.5 37 18.5H32.5ZM11.5 21.5V39.5H36.5V21.5H11.5Z"
        ></path>
    </svg>
)