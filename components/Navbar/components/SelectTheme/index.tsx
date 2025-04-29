'use client'
import { useEffect, useState, useRef } from 'react'

import { useThemeStore } from '@/store/useThemeStore'

import { changeTheme } from '@/utils/changeTheme'

import { MdCheck, MdOutlinePalette } from 'react-icons/md'

export function SelectTheme() {
    const color = useThemeStore(state => state.color)
    const setColor = useThemeStore(state => state.setColor)

    const [isOpen, setIsOpen] = useState(false)
    const popoverRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!document.documentElement.classList.contains(color)) {
                document.documentElement.classList.add(color)
            }
            changeTheme(color)
        }
    }, [color])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const colors = [
        { value: 'cyan', label: 'Ciano', colorClass: 'bg-cyan-500', textClass: 'text-cyan-500', bgChecked: 'bg-cyan-50', darkBgChecked: 'dark:bg-cyan-700' },
        { value: 'orange', label: 'Laranja', colorClass: 'bg-orange-500', textClass: 'text-orange-500', bgChecked: 'bg-orange-50', darkBgChecked: 'dark:bg-orange-700' },
        { value: 'violet', label: 'Violeta', colorClass: 'bg-violet-500', textClass: 'text-violet-500', bgChecked: 'bg-violet-50', darkBgChecked: 'dark:bg-violet-700' },
        { value: 'emerald', label: 'Esmeralda', colorClass: 'bg-emerald-500', textClass: 'text-emerald-500', bgChecked: 'bg-emerald-50', darkBgChecked: 'dark:bg-emerald-700' },
    ]

    return (
        <div className="" ref={popoverRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='rounded-md p-1 hover:bg-main-50 dark:hover:bg-main-700 text-main-500 dark:hover:text-main-300 transition-colors duration-300 cursor-pointer'
            >
                <div className="flex items-center justify-center">
                    <MdOutlinePalette size={20} />
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3.5 flex flex-col gap-3 bg-white shadow rounded-[8px] dark:bg-slate-900 text-gray-700 dark:text-gray-300 py-1.5 px-1 w-[230px] z-50">

                    <div className="flex flex-col gap-2 w-full">
                        {colors.map((item) => {
                            const isSelected = color === item.value
                            return (
                                <button
                                    key={item.value}
                                    onClick={() => setColor(item.value as any)}
                                    className={`flex gap-2 items-center px-6 py-1.5 rounded-md transition-colors duration-300 cursor-pointer
                                        ${isSelected ? `${item.bgChecked} ${item.darkBgChecked}` : ''}
                                    `}
                                >
                                    <div className={`w-4 h-4 rounded-full ${item.colorClass}`} />
                                    <span className="flex-1 text-left">{item.label}</span>
                                    {isSelected && (
                                        <MdCheck className={`w-4 h-4 ${item.textClass}`} />
                                    )}
                                </button>
                            )
                        })}
                    </div>

                </div>
            )}
        </div>
    )
}
