import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { MainLayout } from '~/layouts'
import Home from './pages/Home'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        let Layout = MainLayout
                        const props = {}

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        if (Page === Home) {
                            props.title = route.title
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page {...props} />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
