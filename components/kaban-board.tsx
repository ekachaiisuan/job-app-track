'use client';
import { Board } from '@/lib/models/models.types';
import { Award, Calendar, CheckCircle2, Mic, XCircle } from 'lucide-react';
import React from 'react';
interface KanbanBoardProps {
  board: Board;
  userId: string;
}
const COLUMN_CONFIG: Array<{ color: string; icon: React.ReactNode }> = [
  {
    color: 'bg-cyan-500',
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    color: 'bg-purple-500',
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: 'bg-green-500',
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: 'bg-yellow-500',
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: 'bg-red-500',
    icon: <XCircle className="h-4 w-4" />,
  },
];

export default function KanbanBoard({ board, userId }: KanbanBoardProps) {
  const columns = board.columns;
  return (
    <>
      <div>
        <div>
          {columns.map((column, index) => {
            const config = COLUMN_CONFIG[index] || {
              color: 'bg-gray-500',
              icon: <Calendar className="h-4 w-4" />,
            };
            return <></>;
          })}
        </div>
      </div>
    </>
  );
}
