'use client';
import React from 'react'
import './sider.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sider = () => {
  const pathname = usePathname();

  return (
    <div className='box'>
      <div className='title'>Dashboard</div>
      <CommonLink title='Transaction Table' href='/transaction-table' isActive={pathname == '/transaction-table'} />
      <CommonLink title='Summary Card' href='/summary-card' isActive={pathname == '/summary-card'} />
    </div>

  )
}

export default Sider


export const CommonLink = ({ title, href, isActive }: { title: string, href: string, isActive: boolean }) => {

  return (
    <div className='siderBox' style={{ backgroundColor: isActive ? '#3f51b5' : 'white', color: isActive ? 'white' : 'black' }}>
      <Link href={href}>{title}</Link>
    </div>
  )
}


