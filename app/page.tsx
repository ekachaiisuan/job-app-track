import { Button } from '@/components/ui/button';
import {ArrowRight, Link} from "lucide-react"
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">A better way track your time</h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture,organize and manage job
            </p>
            <div className='flex flex-col items-center gap-4'>
              <Link href="/sign-up" className='w-full'>
                <Button size="lg" className='h-12 px-8 text-lg font-medium w-full'>Get Started<ArrowRight className='w-4 h-4 ml-2' /></Button>
              </Link>
              
              <p className='text-sm text-muted-foreground'>Free forever. No credit card needed</p>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
