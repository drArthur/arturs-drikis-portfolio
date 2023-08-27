/* eslint-disable react/no-unknown-property */
import * as classes from './style.module.css';
import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Detailed, Environment } from '@react-three/drei';
// https://github.com/pmndrs/react-postprocessing
// https://github.com/vanruesc/postprocessing
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

function RotatingBox(props: { index: number; z: number; speed: number }) {
    const { index, z, speed } = props;
    const ref = useRef<THREE.Mesh>(null);
    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
    const [data] = useState({
        y: THREE.MathUtils.randFloatSpread(height * 2),
        x: THREE.MathUtils.randFloatSpread(2),
        spin: THREE.MathUtils.randFloat(8, 12),
        rX: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
        color: getRandomColor(),
    });
    useFrame((state, delta) => {
        if (ref.current) {
            if (delta < 0.1) {
                ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += delta * speed), -z);
            }
            ref.current.rotation.set(
                (data.rX += delta / data.spin),
                Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
                (data.rZ += delta / data.spin),
            );
            if (data.y > height * (index === 0 ? 4 : 1)) {
                data.y = -(height * (index === 0 ? 4 : 1));
            }
        }
    });

    return (
        <Detailed ref={ref} distances={[0, 65, 80]} objects={undefined}>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color={data.color} emissive={data.color} />
            </mesh>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color={data.color} emissive={data.color} />
            </mesh>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color={data.color} emissive={data.color} />
            </mesh>
        </Detailed>
    );
}

enum BoxColors {
    LightBlue = '#99bfd9',
    Sand = '#cfb584',
    HotPink = 'black',
}

function getRandomColor(): string {
    const enumKeys = Object.keys(BoxColors) as (keyof typeof BoxColors)[];
    const randomKey = enumKeys[Math.floor(Math.random() * enumKeys.length)];
    return BoxColors[randomKey];
}

function RotatingBoxes({
    speed = 0.5,
    count = 300,
    depth = 30,
    easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
    return (
        <Canvas
            className={classes.canvasContainer}
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}
        >
            <color attach="background" args={['#0a2f62']} />
            <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="orange" />
            {/* Using cubic easing here to spread out objects a little more interestingly, i wanted a sole big object up front ... */}
            {Array.from(
                { length: count },
                (_, i) => <RotatingBox key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */,
            )}
            <Environment preset="sunset" />
            <EffectComposer multisampling={0}>
                <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
            </EffectComposer>
        </Canvas>
    );
}
RotatingBoxes.propTypes = {
    speed: PropTypes.number,
    count: PropTypes.number,
    depth: PropTypes.number,
    easing: PropTypes.func,
};

export default function InteractiveBackground() {
    const [speed, setSpeed] = useState(0.5);
    const maxSpeed = 20; // Set your desired maximum speed here

    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position
            const scrollPosition = -window.scrollY || -window.pageYOffset;

            // Calculate the new speed value based on scroll position
            const exponent = 0.05; // Adjust this value for the desired effect
            const newSpeed = Math.pow(exponent, scrollPosition / window.innerHeight);

            // Apply a maximum speed limit
            const clampedSpeed = Math.min(newSpeed, maxSpeed);

            // Update the speed state
            setSpeed(clampedSpeed);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return <RotatingBoxes speed={speed} />;
}
