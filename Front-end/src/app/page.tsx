


import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { EmptyMemories } from '@/components/emptyMemories'

export default function Home() {
    return(
        <main className="grid grid-cols-2 min-h-screen">
            {/* parte da esquerda da tela */}
            <div className=" relative flex flex-col items-start justify-between px-28 py-16  overflow-hidden border-r border-gray-50/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

                {/* blur da parte esquerda da tela */}
                <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2  rounded-full bg-purple-700 opacity-50 blur-full "/>

                {/* Strips*/}
                <div className=" absolute right-2 bottom-0 top-0 w-2 bg-stripes  "/>

                {/* Sign In*/}
                <SignIn/>

                {/* Hero */}
                <Hero/>

                {/* Copyright */}               
                <Copyright/>
            </div>

            {/* parte da direita da tela */}
            <div className=" flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
                <EmptyMemories/>
                
            </div>
        </main>
        
    ) 
}
