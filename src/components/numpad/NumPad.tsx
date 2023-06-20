import React, { FC } from 'react'

const NumPad: FC<{
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}> = ({ value, setValue }) => {
  const handleTableNumber = (value: string) => {
    if (value === 'clear') {
      setValue('')
    } else if (value === '<') {
      setValue((prev) => prev.slice(0, -1))
    } else {
      setValue((prev) => prev + value)
    }
  }

  return (
    <>
      <input
        disabled
        className="w-full h-16 font-bold text-center"
        value={value}
      />
      <ul id="keyboard">
        <li onClick={() => handleTableNumber('1')} className="letter">
          1
        </li>
        <li onClick={() => handleTableNumber('2')} className="letter">
          2
        </li>
        <li onClick={() => handleTableNumber('3')} className="letter">
          3
        </li>
        <li onClick={() => handleTableNumber('4')} className="letter clearl">
          4
        </li>
        <li onClick={() => handleTableNumber('5')} className="letter">
          5
        </li>
        <li onClick={() => handleTableNumber('6')} className="letter">
          6
        </li>
        <li onClick={() => handleTableNumber('7')} className="letter clearl">
          7
        </li>
        <li onClick={() => handleTableNumber('8')} className="letter ">
          8
        </li>
        <li onClick={() => handleTableNumber('9')} className="letter">
          9
        </li>
        <li onClick={() => handleTableNumber('clear')} className="switch">
          clear
        </li>
        <li onClick={() => handleTableNumber('0')} className="letter">
          0
        </li>
        <li onClick={() => handleTableNumber('<')} className="delete lastitem">
          {'<'}
        </li>
      </ul>
    </>
  )
}

export default NumPad
