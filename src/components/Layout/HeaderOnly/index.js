import Header from '~/components/Layout/components/Header'

function HeaderOnly({ children }) {
    return (
        <h1 className="container">
            <Header />
            <div className="content">{children}</div>
        </h1>
    )
}

export default HeaderOnly
