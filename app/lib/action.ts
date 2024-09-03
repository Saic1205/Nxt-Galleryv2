'use server';
import prisma from '@/prisma/client';
import { cookies } from 'next/headers';
export async function handleLogout() {
  const token = cookies().get('session')?.value;
  if (token) {
    await prisma.session.delete({ where: { token } });
    cookies().delete('session');
    
  }
}