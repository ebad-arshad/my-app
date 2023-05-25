"use client"

import { IconButton, MenuItem, Tooltip } from '@mui/material'
import React, { FC, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion'

const NavInput: FC = () => {
    const [searchInput, setSearchInput] = useState<boolean>(false);

    return (
        <motion.div
            className={`rounded-md w-[70%] ml-24 ${searchInput ? 'bg-[#fff] shadow-md' : 'bg-[#f1f3f4]'} h-12 flex items-center px-2`}>
            <Tooltip enterDelay={1000} title="Search">
                <IconButton className='hover:text-black'>
                    <SearchIcon />
                </IconButton>
            </Tooltip>
            <input onFocus={() => setSearchInput(true)} onBlur={() => setSearchInput(false)} type="text" className='ml-2 bg-transparent placeholder:text-gray w-full h-full outline-none text-sm' placeholder='Search' />
        </motion.div>
    )
}

export default NavInput