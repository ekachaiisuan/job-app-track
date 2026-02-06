import connectDB from '@/lib/db';
import {Board, Column} from '@/lib/models';

const DEFAULT_COLUMNS = [
    {
        name: "Wish List",
        order: 0,
    },
    {
        name: "Applied",
        order: 1,
    },
    {
        name: "Interviewing",
        order: 2,
    },
    {
        name: "Offers",
        order: 3,
    },
    {
        name: "Rejected",
        order: 4,
    },            
]


export async function initializeUserBoard(userId: string) {
  try {
    await connectDB();
    const existingBoard = await Board.findOne({userId,name:"Job Hunt"})
    if (existingBoard) {
      return existingBoard;
    }

    const board = await Board.create({
      name: "Job Hunt",
      userId,
      columns: [],
    });

    const columns = await Promise.all(
        DEFAULT_COLUMNS.map(async (col) => {
            return await Column.create({
                name: col.name,
                boardId: board._id,
                order: col.order,
                jobApplications: [],
            });
        })
    );
    board.columns = columns.map(col => col._id);
    await board.save();
    return board;

   
  } catch (err) {
    throw err;
  }
}
