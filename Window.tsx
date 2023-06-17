import React from "react";

interface WindowProps{
  children: React.ReactNode
  onClose: () => void
}

export function Window({children, onClose}: WindowProps) {
  return (
    <>
      <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClose} />

      <div className="w-[500px] rounded absolute bg-white p-5 left-1/2 -translate-x-1/2">

        <h1 className="text-center text-2xl mb-5">Your post</h1>

        {children}
      </div>
    </>
  )
}