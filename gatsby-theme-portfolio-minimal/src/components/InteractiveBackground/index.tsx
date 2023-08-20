import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as classes from './style.module.css';

export default function InteractiveBackground() {
    return (
        // Abstract rotating cube

        <Canvas className={classes.canvasContainer}>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
}
