import FilterMenu from '~/features/filter-menu/containers/filter-menu'
import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Taft Eats' }, { name: 'description', content: 'Taft Eats' }]
}

export default function signUp() {
  return (
    <main className="flex justify-center items-center min-h-screen">
        <section className="bg-white font-lexend flex flex-col items-center justify-center gap-5 p-5 w-[626px]  h-[99xpx] rounded-2xl" >

          <div className='mb-6 flex flex-col items-center justify-center '>
            <img src="/logos/tafteats_logo.png" alt="Taft Eats Logo" width="150" height="150" className='mx-auto mb-4' />
            <h1 className=' text-center text-3xl text-[#326F33] font-bold mb-2'>Sign Up to unlock the <br></br> best of Taft Eats! </h1>
            
          </div>

          <div className='flex flex-col'>
            <label htmlFor="name">Name *</label>
            <input type="text"  id="name" name="name" className='border-2 border-black rounded-sm' required />

          </div>
            
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-black'>Email *</label>
            <input type="email" className='border-2 border-black rounded-sm' id="email" name="email" required />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" name="password" className='border-2 border-black rounded-sm' required />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="confirm-password">Confirm Password *</label>
            <input type="password" id="confirm-password" name="confirm-password" className='border-2 border-black rounded-sm' required />
          </div>

          <div className='flex flex-col'>
            <button type="submit" value="Next" className='bg-[#326F33] text-white px-6 py-2 rounded-md'>Next</button>
          </div>
          
        </section>
      
    </main>
  )
}