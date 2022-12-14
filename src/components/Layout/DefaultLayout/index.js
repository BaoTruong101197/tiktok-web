import Header from '~/components/Layout/components/Header'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
    return (
        <h1 className="container">
            <Header />
            <div className="content">
                <Sidebar />
                {children}
            </div>
        </h1>
    )
}

export default DefaultLayout
