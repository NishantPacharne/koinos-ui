import Image from 'next/image'
import {BsTwitter, BsDiscord} from 'react-icons/bs'

export default function Home() {
  return (
    <>
          <main className="w-screen h-screen">

      <nav className="bg-slate-100 shadow-2xl z-20 w-full">
        <div className="container">
          <div className="flex justify-between py-4">
            <div className="flex space-x-4 items-center">
              <img src="/logo.png" alt="logo" className="w-16 block" />
              <span className="text-xl md:text-3xl">Koinos Garden</span>
            </div>
            <div className="flex space-x-4 items-center">
              <a href="#" className='text-2xl'>
                <BsTwitter/>
              </a>
              <a href="#" className='text-2xl'>
                <BsDiscord/>
              </a>
            </div>
          </div>
        </div>
      </nav>


      <div className="container pt-8 pb-8 lg:pt-24 xl:pt-16 2xl:pt-28">
        <div className="border-2 shadow-2xl p-8 rounded-2xl main__container">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 w-full h-full">
            <div className="ml-8 w-full h-full flex items-center justify-center">
              <div className="text-center lg:text-left">
                <h2 className="hero-text">
                  welcome to decentralized <br />
                  capital on koinos
                </h2>
                <h4 className="text-lg">
                  Koinos Garden is a collection of 1,000 uniaue Goat NFTS coexisting on Koinos Blockchain that grant access to an investment
                  DAO.
                </h4>
                <div className="flex space-x-3 items-center justify-center lg:justify-start mt-6">
                  <input type="text" placeholder="qty" className="border-custom_dark border border-[#ff74b5] px-4 py-2 bg-slate-100 rounded-md w-32" />
                  <button type="submit" className="border-custom_dark text-white border-white rounded-md px-4 py-2 mint__btn">Mint</button>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="flex flex-col items-center lg:items-end">
                <span className="text-2xl">80/1000</span>
                <div className="hero-img mt-2">
                  <img src="/311.png" alt="hero-img" className="block w-full ml-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
