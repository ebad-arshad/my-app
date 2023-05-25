import React, { FC, useRef } from 'react'
import { IconButton, Tooltip } from '@mui/material';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import NotesList from '@/components/NotesList'

const Notes: FC = () => {

    const inputRef = useRef<null | any>(null)

    const inputFocused = () => {
        inputRef?.current?.focus();
        console.log(inputRef?.current);

    }

    return (
        <div className='flex flex-col flex-1 items-center'>
            <div className='flex items-center px-4 mx-7 h-12 mt-8 md:mx-0 md:w-[600px] rounded-md shadow-[0_0_8px_rgba(0,0,0,0.3)]'>
                <input ref={inputRef} onFocus={inputFocused} placeholder='Take a note...' className='flex-1 placeholder:text-black/60 placeholder:font-semibold outline-none' type="text" />
                <div className='flex items-center gap-2'>
                    <Tooltip enterDelay={1000} title="New list">
                        <IconButton className='hover:text-black'>
                            <CheckBoxOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip enterDelay={1000} title="New note with drawing">
                        <IconButton className='hover:text-black'>
                            <BrushOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip enterDelay={1000} title="New note with image">
                        <IconButton className='hover:text-black'>
                            <CollectionsOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className='flex items-center px-4 mx-7 h-12 mt-8 md:mx-0 md:w-[600px] rounded-md shadow-[0_0_8px_rgba(0,0,0,0.3)]'>
                <input placeholder='Take a note...' className='flex-1 placeholder:text-black/60 placeholder:font-semibold outline-none' type="text" />
                <div className='flex items-center gap-2'>
                    <Tooltip enterDelay={1000} title="New list">
                        <IconButton className='hover:text-black'>
                            <CheckBoxOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip enterDelay={1000} title="New note with drawing">
                        <IconButton className='hover:text-black'>
                            <BrushOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip enterDelay={1000} title="New note with image">
                        <IconButton className='hover:text-black'>
                            <CollectionsOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <NotesList />
        </div>
    )
}

export default Notes