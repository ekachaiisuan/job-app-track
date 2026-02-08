import { getSession } from '@/lib/user';
import connectDB from '@/lib/db';
import { redirect } from 'next/navigation';
import { Board } from '@/lib/models';
import KanbanBoard from '@/components/kaban-board';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session?.user) {
    redirect('/sign-in');
  }

  await connectDB();

  const board = await Board.findOne({
    userId: session.user.id,
    name: 'Job Hunt',
  });

  console.log('User Board:', board);
  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto p-6'>
        <div className='mb-6'>
          <h1 className="text-2xl font-bold mb-4">{board?.name}</h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>
        <KanbanBoard board={board} userId={session.user.id} />
      </div>
    </div>
  );
}
