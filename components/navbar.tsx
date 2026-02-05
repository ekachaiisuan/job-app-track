import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { getSession } from '@/lib/user';

export default async function Navbar() {
  const session = await getSession();
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          job Tracker
        </Link>
        <div className="flex gap-2">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant={'ghost'}
                  className="text-gray-700 hover:text-black"
                >
                  Dashboard
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button className="text-gray-100 hover:text-black">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="text-gray-100 hover:text-black">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
