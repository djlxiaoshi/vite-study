/*
 验证装饰器 esbuild是否不支持
 */
import React, { useEffect } from 'react'

function annotation(target:any) {
    target.annotated = true;
}

@annotation
class MyClass {}

export default function() {

    useEffect(() => {
        const obj = new MyClass();
        //@ts-ignore
        console.log(obj.annotated);
    }, []);

    return <div>
        decorator
    </div>
}