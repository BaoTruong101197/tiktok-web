import {
    Language as LanguageIcon,
    Question as QuestionIcon,
    Keyboard as KeyboardIcon,
    Theme as ThemeIcon,
    Profile as ProfileIcon,
    Live as LiveIcon,
    Settings as SettingsIcon,
    LogOut as LogOutIcon
} from '~/components/Icons'

export const MENU_ITEMS = [
    {
        name: 'English',
        icon: LanguageIcon,
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    name: 'English'
                },
                {
                    code: 'vi',
                    name: 'Tiếng Việt (Việt Nam)'
                },
                {
                    code: 'la-3',
                    name: 'العربية'
                },
                {
                    code: 'la-4',
                    name: 'বাঙ্গালি (ভারত)'
                },
                {
                    code: 'la-5',
                    name: 'Cebuano (Pilipinas)'
                },
                {
                    code: 'la-6',
                    name: 'Čeština (Česká republika)'
                },
                {
                    code: 'la-7',
                    name: 'Deutsch'
                },
                {
                    code: 'la-8',
                    name: 'Ελληνικά (Ελλάδα)'
                },
                {
                    code: 'la-9',
                    name: 'Español'
                },
                {
                    code: 'la-10',
                    name: 'Suomi (Suomi)'
                },
                {
                    code: 'la-11',
                    name: 'Filipino (Pilipinas)'
                },
                {
                    code: 'la-12',
                    name: 'Français'
                },
                {
                    code: 'la-13',
                    name: 'עברית (ישראל)'
                }
            ]
        }
    },
    {
        name: 'Feedback and help',
        icon: QuestionIcon,
        to: '/feedback'
    },
    {
        name: 'Keyboard shortcuts',
        icon: KeyboardIcon
    },
    {
        name: 'Dark mode',
        icon: ThemeIcon,
        toggle: true
    }
]

export const USER_MENU_ITEMS = [
    {
        name: 'View profile',
        icon: ProfileIcon,
        to: '/profile'
    },
    {
        name: 'Get Coins',
        icon: QuestionIcon,
        to: '/coins'
    },
    {
        name: 'LIVE Studio',
        icon: LiveIcon,
        to: '/live'
    },
    {
        name: 'Settings',
        icon: SettingsIcon,
        to: '/setting'
    },
    ...MENU_ITEMS,
    {
        name: 'Log out',
        icon: LogOutIcon,
        separate: true
    }
]