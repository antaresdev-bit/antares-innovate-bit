import React from 'react'
import Scene from './Scene'
import MobileScene from './mobile/MobileScene'
import { useEffect, useState } from 'react'

export default function OptimisedScene({gpuTier}) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    return (
        <>
            {isMobile ? <MobileScene/> : <Scene/>}
        </>
    )
}
