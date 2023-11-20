import { FormEvent } from 'react'
import iphoneMockup from './assets/iPhone Mockup.png'
import useSEO from './hooks/useSEO'

export default function App() {
  useSEO({
    title: 'Gradien',
    description: 'Login page'
  })
  
  const handleClear = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  }

  return (
    <main className="min-h-screen grid place-content-center bg-gradient-to-tr from-amber-200 via-rose-300 to-slate-100">
      <div className="flex max-md:flex-col overflow-hidden md:rounded-[12px] bg-white">
        <section className="flex flex-col pt-10 md:h-full overflow-hidden relative bg-[#003142] text-[#80AEE6]">
          <header className="flex flex-col items-center gap-3 -mb-32">
            <h1 className="text-4xl font-bold text-white">Gradie</h1>
            <p>Beautyful gradients in seconds</p>
          </header>
          
          <img src={iphoneMockup} alt="Mockup by Iphone" className='w-[450px]' />
        </section>

        <section className="flex flex-col gap-8 py-10 px-12 max-md:w-full md:w-[450px] border-[1px] border-gray-200 rounded-r-[12px] overflow-hidden">
          <header>
            <h1 className="text-4xl font-bold">Login</h1>
          </header>
          <form className="flex flex-col gap-5" onSubmit={(e) => handleClear(e)}>
            <label className="flex flex-col font-bold gap-2">
              Email
              <input type="text" className='outline-none shadow-inner rounded-md font-normal p-4 border-[1px] border-gray-300 w-full' placeholder="John@example.com" />
            </label>
            <label className="flex flex-col font-bold gap-2">
              Password
              <input type="password" className='outline-none shadow-inner rounded-md font-normal p-4 border-[1px] border-gray-300 w-full' placeholder="At least 8 characters" />
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className='border-gray-300 border-[1px] checked:bg-[#003142] checked:before:content-["✓"] text-white flex justify-center items-center outline-none w-5 h-5 cursor-pointer appearance-none rounded-md' />
              <div className="w-[65%]">
                By creating an account, you agree to the <a href="#" className="text-[#003142] font-bold border-b-2 -border-spacing-2 border-[#003142]">Terms & Conditions</a>.
              </div>
            </label>
            <button type="submit" className="bg-[#003142] cursor-pointer mt-2 text-white rounded-md py-4 font-bold">Create an Account</button>
          </form>
        </section>
      </div>
    </main>
  )
}
