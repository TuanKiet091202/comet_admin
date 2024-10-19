import { authMiddleware } from "@clerk/nextjs";

// Cho phép tất cả API và endpoint cần thiết
export default authMiddleware({
  ignoredRoutes: ["/api/:path*", "/ws/ws"], // Bỏ qua kiểm tra cho tất cả API
});

// Cấu hình matcher để áp dụng middleware đúng cách
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
