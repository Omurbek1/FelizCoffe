import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menus/Menu/Menu'
import About from './components/About'
import Invest from './components/Invest/Invest'
import Address from './components/Address'
import Blog from './components/Blog/Main_Blog'
import Reviews from './components/Otzyv'
export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Invest} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/reciews" component={Reviews} />
                    <Route exact path='/adress' component={Address} />
                    <Route exact path="/franchise" component={Invest} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>

    )
}