import React from 'react';
import { Canvas } from '@react-three/fiber';

export default function InteractiveBackground(canvasClassName: any) {
    console.log(canvasClassName);
    return (
        // <></>
        <Canvas className={canvasClassName}>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
}
