import PropTypes from 'prop-types'
import Header from '~/layouts/components/Header'

function HeaderOnly({ children }) {
    return (
        <h1 className="container">
            <Header />
            <div className="content">{children}</div>
        </h1>
    )
}

HeaderOnly.prototype = {
    children: PropTypes.node.isRequired
}

export default HeaderOnly
