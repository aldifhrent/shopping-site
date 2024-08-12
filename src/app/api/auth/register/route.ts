import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';// Adjust this import path as needed
import { registerDTO } from '@/lib/schema';
import prismadb from '@/lib/db';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const result = registerDTO.safeParse(body);

    if (!result.success) {
      // If validation fails, return the error messages
      return NextResponse.json({ errors: result.error.flatten() }, { status: 400 });
    }

    // If validation succeeds, use the parsed data
    const { email, name, password } = result.data;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        role: 'MEMBER'
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
};