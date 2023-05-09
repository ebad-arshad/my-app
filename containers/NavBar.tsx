"use client"

import { FC, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import notesImage from '../assets/images/notes.png'
import profilePic from '../assets/images/profilePic.jpg'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, List, Tooltip } from '@mui/material';
import NavInput from '@/components/NavInput';
import CircularProgress from '@mui/material/CircularProgress';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ViewListIcon from '@mui/icons-material/ViewList';

const NavBar: FC = () => {

    const [isRefresh, setIsRefresh] = useState<string>('')
    const [listView, setListView] = useState<boolean>(false)

    const handleRefresh = () => {
        setIsRefresh('refresh')
        setTimeout(() => {
            setIsRefresh('')
        }, 2000);
    }

    return (
        <div className='text-gray px-4 py-2 flex items-center border-b border-b-gray/10'>
            <div className='mr-1'>
                <IconButton className='hover:text-black'>
                    <MenuIcon />
                </IconButton>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <div>
                    <Image width={40} height={40} src={notesImage} alt='logo' />
                </div>
                <p className='text-xl font-semibold'>Keep</p>
            </div>
            <div className='flex-1 hidden md:flex'>
                <NavInput />
            </div>
            <ul className='flex gap-1 items-center ml-auto'>
                <li className='md:hidden flex'>
                    <Tooltip enterDelay={1000} title="Search">
                        <IconButton className='hover:text-black'>
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip enterDelay={1000} title="Refresh">
                        <IconButton className='hover:text-black' onClick={handleRefresh}>
                            {isRefresh === 'refresh' ? <CircularProgress className='text-gray' size={20} /> : <RefreshIcon />}
                        </IconButton>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip enterDelay={1000} title="List View">
                        <IconButton className='hover:text-black' onClick={() => setListView(e => !e)}>
                            {listView ? <ViewStreamIcon /> : <ViewListIcon />}
                        </IconButton>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip enterDelay={1000} title="Settings">
                        <IconButton className='hover:text-black'>
                            <SettingsIcon />
                        </IconButton>
                    </Tooltip>
                </li>
                <li className='rounded-full overflow-hidden ml-10'>
                    <Image width={35} height={35} src={profilePic} alt='logo' />
                </li>
            </ul>
        </div >
    )
}

export default NavBar