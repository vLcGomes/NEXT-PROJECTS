import NextResponse from 'next/server'

export async function GET(request: Request) {
  return Response.json({
    t: "testando",
    p: 'Primeiro',
    s: 'Srimeiro',
    v: 'Vrimeiro'
  })
}