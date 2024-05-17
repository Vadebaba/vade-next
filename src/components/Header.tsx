import React from 'react';
import { createClient } from '@/prismicio';
import Link from 'next/link';
//import { label } from 'three/examples/jsm/nodes/Nodes.js';
import { PrismicNextLink } from '@prismicio/next';
import NavBar from '@/components/NavBar';
//import { link } from 'fs';


export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");



    return (
        <header className='top-0 z-50 mx-auto max-w-[70rem] md:sticky md:top-4'>
           <NavBar settings={settings} />
        </header>
    );
}