
import Link from 'next/link'
import Image from 'next/image'
import SiteLogo from '@/app/assets/REDANTSFCLOGO.png'

function header() {
  return (
    <div className='flex flex-col md:justify-between px-20 py-5'>
        <nav className='flex justify-between  text-white'>
            <div className='flex flex-row'> 
            <Link className="header" href="/">LOGO</Link>  {/* <Image
                alt="Site Logo"
                src={''}
                placeholder="blur"
                sizes="10vw"
             
               
                className='-z-10'/> */}
           </div>
            <div className="flex flex-row justify-between text-l"> 
              
              <Link href="pages/about/" className='pr-5'>ABOUT</Link>
              <Link href="#" className='pr-5'>CLUB PHOTOS</Link>
              <Link href='mailto:joko.redantsfc@gmail.com' target={'_blank'} 
            className='hover:bg-light hover:text-dark p-42'>Contact US</Link>

            
            </div>
        </nav>
    </div>
  )
}

export default header