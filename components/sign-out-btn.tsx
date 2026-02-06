'use client';

import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { DropdownMenuItem } from './ui/dropdown-menu';

export default function SignOutBtn() {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        const result = await signOut();
        if (result.data) {
          router.push('/sign-in');
        } else {
            alert('Error signing out');
        }
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
}
