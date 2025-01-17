import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div
      className='bg-gradient-to-b from-sky-900 to-slate-950 bg-opacity-60 h-12 flex flex-row 
        px-4 sm:px-20 md:px-40 lg:px-60 mb-10 gap-2'
    >
      <Link to='/' className='my-auto'>
        <div>
          <p
            className='text-center font-nasalization 
            text-2xl leading-5'
          >
            SPACE NEWS
          </p>
        </div>
      </Link>
      <div className='my-auto float-right ml-auto'>
        <ul className='flex flex-row gap-3 md:gap-10 text-lg font-bold items-center h-12 tracking-wide'>
          <Link to='/apod'>
            <li className='hover:text-cyan-400 hover:cursor-pointer hover:translate-y-0.5'>
              Picture of the day!
            </li>
          </Link>
          <Link to='/news'>
            <li className='hover:text-cyan-400 hover:cursor-pointer hover:translate-y-0.5'>
              News
            </li>
          </Link>
          <Link to='/blogs'>
            <li className='hover:text-cyan-400 hover:cursor-pointer hover:translate-y-0.5'>
              Blogs
            </li>
          </Link>
          <Link to='/reports'>
            <li className='hover:text-cyan-400 hover:cursor-pointer hover:translate-y-0.5'>
              Reports
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
