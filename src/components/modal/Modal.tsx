import useOnClickOutside from '@/hooks/useOnClickOutside'
import React, { FC, PropsWithChildren, useRef } from 'react'

interface ModalProps extends PropsWithChildren {
  close: () => void
}

const Modal: FC<ModalProps> = ({ children, close }) => {
  const modalRef = useRef(null)
  useOnClickOutside(modalRef, close)
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded-md">
        {children}
      </div>
    </div>
  )
}

export default Modal
