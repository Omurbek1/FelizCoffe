import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HotMenu from '../Hot_Sum_Menu/Hot_Sum'

export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                  
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>

    )
}