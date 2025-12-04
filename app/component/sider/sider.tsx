'use client';
import React from 'react'
import './sider.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sider = () => {
  return (
    <div className='box'>

      <div className='title'>Assessment Dashboard</div>
      <CommonLink title='Transaction Table' href=''/>
      <CommonLink title='Summary Card' href=''/>
      <CommonLink title='Transaction Table' href=''/>
    </div>

  )
}

export default Sider


export const CommonLink = ({title,href}:{title :string,href: string}) => {

  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className='siderBox' style={{backgroundColor : pathname == '/' ? '#3f51b5': 'white',color:pathname == '/' ? 'white': 'black' }}>
      <Link href={href}>{title}</Link>
    </div>
  )
}


