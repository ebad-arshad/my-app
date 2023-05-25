import React from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const NotesList = () => {
  return (
    <>
      {/* Notes List */}
      {/* <div></div> */}

      {/* If no notes then this div will appear */}
      <div className='flex flex-col items-center mt-[200px]'>
        <LightbulbOutlinedIcon className='text-gray/20 text-[140px]' />
        <p className='text-black/60 font-semibold text-xl mt-4'>Notes you add appear here</p>
      </div>
    </>
  )
}

export default NotesList