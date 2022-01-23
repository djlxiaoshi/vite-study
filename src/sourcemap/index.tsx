import { Button } from 'antd'
import React, { useEffect, useState } from 'react'


export default function () {
    useEffect(() => {

        throw new Error('just a test')
    }, [])

  return (
    <div>
      sourcemap
    </div>
  )
}
