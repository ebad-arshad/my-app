"use client"

import React, { FC, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface selectorProps {
    conditionStore: { conditions: { sidebar: boolean } };
}

const Sidebar: FC = () => {

    const [sidebarWidth, setSidebarWidth] = useState<boolean>(false)
    const { sidebar } = useSelector((e: selectorProps) => e.conditionStore.conditions)

    useEffect(() => {
        if (sidebar) {
            setSidebarWidth(true)
        }
        else {
            setSidebarWidth(false)
        }
    }, [sidebar])


    const openSidebar = () => {
        if (sidebar) return
        setSidebarWidth(true)
    }

    const closeSidebar = () => {
        if (sidebar) return
        setSidebarWidth(false)
    }

    return (
        <motion.ul onHoverStart={openSidebar} onHoverEnd={closeSidebar} className={`text-sm font-semibold ${sidebarWidth ? 'w-[280px] shadow-xl' : 'w-[65px]'} h-[calc(100vh-60px)] text-gray flex flex-col items-center pt-1`}>
            <li className={`bg-[#feefc3] transition duration-300 rounded-full ${sidebarWidth ? 'rounded-tl-none rounded-bl-none w-full' : ' w-[50px]'} text-black h-[50px] p-3 cursor-pointer flex items-center`}><LightbulbOutlinedIcon className={`${sidebarWidth ? 'ml-2 mr-5' : ''}`} /> {sidebarWidth ? 'Notes' : null} </li>
            <li className={`h-[50px] p-3 transition duration-300 rounded-full ${sidebarWidth ? 'rounded-tl-none rounded-bl-none w-full' : ' w-[50px]'} hover:bg-gray/10 cursor-pointer flex items-center`}><NotificationsOutlinedIcon className={`${sidebarWidth ? 'ml-2 mr-5' : ''}`} /> {sidebarWidth ? 'Reminders' : null} </li>
            <li className={`h-[50px] p-3 transition duration-300 rounded-full ${sidebarWidth ? 'rounded-tl-none rounded-bl-none w-full' : ' w-[50px]'} hover:bg-gray/10 cursor-pointer flex items-center`}><CreateOutlinedIcon className={`${sidebarWidth ? 'ml-2 mr-5' : ''}`} /> {sidebarWidth ? 'Edit labels' : null} </li>
            <li className={`h-[50px] p-3 transition duration-300 rounded-full ${sidebarWidth ? 'rounded-tl-none rounded-bl-none w-full' : ' w-[50px]'} hover:bg-gray/10 cursor-pointer flex items-center`}><ArchiveOutlinedIcon className={`${sidebarWidth ? 'ml-2 mr-5' : ''}`} /> {sidebarWidth ? 'Archive' : null} </li>
            <li className={`h-[50px] p-3 transition duration-300 rounded-full ${sidebarWidth ? 'rounded-tl-none rounded-bl-none w-full' : ' w-[50px]'} hover:bg-gray/10 cursor-pointer flex items-center`}><DeleteOutlineOutlinedIcon className={`${sidebarWidth ? 'ml-2 mr-5' : ''}`} /> {sidebarWidth ? 'Trash' : null} </li>
        </motion.ul>
    )
}

export default Sidebar