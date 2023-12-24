'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createTask = async (formData:FormData) => {
    const content = formData.get('content');
    // const Task = z.object({
    //     content: z.string().min(5),
    //   });
    //   Task.parse({ content });
    if (content !== null && typeof content === 'string') {
        // Task.parse({ content });
        await prisma.task.create({
          data: {
            content,
          },
        });
        revalidatePath('/tasks');
      } else {
        // Handle the case when content is null or not a string
        console.error('Invalid content:', content);
      }
};

export const deleteTask = async (formData:FormData) => {
    const id = formData.get('id');

    // try {
        if (id !== null && typeof id === 'string') {
            await prisma.task.delete({
                where: { id },
              });
            revalidatePath('/tasks');
            // return { message: 'success' };
            // dont redirect in try-catchh
          } else {
            console.error('Invalid id:', id);
            // return { message: 'fail to delete' };
            // Handle the case when content is null or not a string
            // console.error('Invalid id:', id);
          }
    // } catch (error) {
    //     console.error(error);
    //     return { message: 'fail' };
    // }
  };

  export const editTask = async (formData:FormData) => {
    const id = formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');
    if (id !== null && typeof id === 'string' && content !== null && typeof content === 'string'){
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        content,
        completed: completed === 'on' ? true : false,
      },
    });
    redirect('/tasks');
  }
  else {
    // Handle the case when content is null or not a string
    console.error('Invalid id:', id);
  }

  }

  export const getTask = async (id:string) => {
    return prisma.task.findUnique({
      where: {
        id,
      },
    });
  };