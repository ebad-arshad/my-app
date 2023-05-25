"use client"

import React from 'react'
import Sidebar from "@/containers/Sidebar";
import NavBar from "@/containers/NavBar";
import Notes from "@/containers/Notes";
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux'

const Providers = () => {
    return (
        <ReduxProvider store={store}>
            <div className='flex flex-col'>
                <NavBar />
                <div className='flex'>
                    <Sidebar />
                    <Notes />
                </div>
            </div>
        </ReduxProvider>
    )
}

export default Providers