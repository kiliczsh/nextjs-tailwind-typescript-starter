import { NextResponse } from 'next/server'
 
export async function GET() {
  return NextResponse.json({ message: 'Hello from Next.js! GET api' })
}