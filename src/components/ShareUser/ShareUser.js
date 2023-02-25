import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import config from '~/config'

import styles from './ShareUser.module.scss'
import Button from '~/components/Button'
import { Popper as PopperWrapper } from '~/components/Popper'
import { DownArrow } from '~/components/Icons'
import TippyAnimation from '~/components/TippyAnimation'

const cx = classNames.bind(styles)

function ShareUser({ children, offset = [-25, 5], placement = 'top-start' }) {
    return (
        <TippyAnimation
            offset={offset}
            placement={placement}
            childrenTippy={
                <PopperWrapper className={cx('menu-wrapper')}>
                    {config.share_user.map(shareItem => {
                        const Component = shareItem.component
                        return (
                            <Button
                                className={cx('menu-item')}
                                key={shareItem.id}
                                LeftIcon={<Component className={cx('item-icon')} />}
                            >
                                {shareItem.text}
                            </Button>
                        )
                    })}
                    <Button className={cx('down-arrow')} LeftIcon={<DownArrow />}></Button>
                </PopperWrapper>
            }
        >
            {children}
        </TippyAnimation>
    )
}

ShareUser.prototype = {
    children: PropTypes.node.isRequired,
    offset: PropTypes.array,
    placement: PropTypes.string.isRequired
}

export default ShareUser
