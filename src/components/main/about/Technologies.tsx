'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react";

interface ITechnologies { }

const technologies = [
    {
        name: 'HTML',
        icon: 'html'
    }, {
        name: 'css',
        icon: 'css'
    },
    {
        name: 'JS',
        icon: 'javascript'
    },
    {
        name: 'react',
        icon: 'react'
    },
    {
        name: 'node',
        icon: 'node'
    },
    {
        name: 'typescript',
        icon: 'typescript'
    },
    {
        name: 'next',
        icon: 'next'
    },
    {
        name: 'nest',
        icon: 'nest'
    }, {
        name: 'prisma',
        icon: 'prisma'
    }, {
        name: 'docker',
        icon: 'docker'
    }, {
        name: 'axios',
        icon: 'axios'
    },
    {
        name: 'tailwind',
        icon: 'tailwind'
    },
    {
        name: 'postgreSQL',
        icon: 'postgreSQL'
    },
    {
        name: 'mongo',
        icon: 'mongo'
    },
    {
        name: 'vercel',
        icon: 'vercel'
    },
    {
        name: 'vite',
        icon: 'vite'
    },


]

export default function Technologies() {
    

    return (
        <div className="w-full">
            <div>
                <h3 className="font-bold text-[24px]">Technologies</h3>
            </div>
            <div className="logos">
                <ul
                    className="logos-slide"
                >
                    {technologies.map((el, index) => (
                        <li  key={index}>
                            <div className="relative w-[100px] h-[100px]">
                            <Image src={`/technologies/${el.icon}.svg`} alt={el.name} fill={true} />
                            </div>
                        </li>
                    ))}
                    
                </ul>
                <ul
                    className="logos-slide"
                >
                    {technologies.map((el, index) => (
                        <li  key={index}>
                            <div className="relative w-[100px] h-[100px]">
                            <Image src={`/technologies/${el.icon}.svg`} alt={el.name} fill={true} />
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    );
}