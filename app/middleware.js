export function middleware(req) {
  console.log("Middleware triggered:", req.url);
  return NextResponse.next();
}
