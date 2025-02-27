export async function GET() {
  const temp = await new Promise((r) => setTimeout(r, 2000));
  console.log(temp);
  return Response.json({ message: "Hello from Next.js!", time: new Date() });
}
