import type { ProjectImageKey } from "@/lib/project-images";

export interface Project {
  slug: string;
  title: string;
  descriptionVi: string;
  descriptionEn: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  storeUrl?: string;
  videoUrl?: string;
  caseStudyUrl?: string;
  highlightsVi?: string[];
  highlightsEn?: string[];
  screenshots?: { key: ProjectImageKey; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "calories-tracking",
    title: "Calories-Tracking",
    descriptionVi:
      "Ứng dụng Flutter theo dõi calories/dinh dưỡng, lập kế hoạch bữa ăn và thống kê tiến độ. Áp dụng Clean Architecture + DDD để tách lớp rõ ràng và tự động hoá CI/CD giúp build–test–release ổn định, dễ mở rộng.",
    descriptionEn:
      "A production-grade Flutter calorie & nutrition tracking app with meal planning and progress analytics. Built with Clean Architecture + DDD and automated CI/CD for reliable build–test–release and long-term scalability.",
    tech: [
      "Dart",
      "Flutter",
      "Riverpod",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Cloud Messaging (FCM)",
      "Firebase Storage",
      "Firebase Analytics",
      "Firebase App Check (Play Integrity)",
      "SharedPreferences (Cache)",
      "Health Connect (Android 13+)",
      "Google Gemini API (Voice Input)",
      "GitHub Actions (CI/CD)",
    ],
    repoUrl: "https://github.com/qtuwn/Calories-Tracking",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.tuquoctuan.calories_app&pcampaignid=web_share",
    videoUrl: "https://youtu.be/kRXbU7n17Ls?si=S-M1sKjJAQMpy5x6",
    caseStudyUrl: "/projects/calories-tracking",
    highlightsVi: [
      "Clean Architecture + DDD: tách lớp (data/domain/presentation), dễ test và mở rộng",
      "Hybrid cache-first + offline support, realtime sync với Firestore",
      "CI/CD tự động: build – test – release ổn định",
    ],
    highlightsEn: [
      "Clean Architecture + DDD with clear layering (data/domain/presentation) for testability and scalability",
      "Hybrid cache-first with offline support and Firestore real-time sync",
      "Automated CI/CD pipeline for stable build–test–release",
    ],
    screenshots: [
      { key: "calories-tracking:1", alt: "Calories-Tracking - Tổng quan" },
      { key: "calories-tracking:2", alt: "Calories-Tracking - Thực đơn" },
      { key: "calories-tracking:3", alt: "Calories-Tracking - Nhật ký" },
    ],
  },
  {
    slug: "erp-hrm",
    title: "ERP_HRM",
    descriptionVi:
      "Hệ thống ERP tuyển dụng end-to-end: Job public + filter/feed, ứng tuyển (upload CV / resume library), Kanban pipeline + stage history + bulk actions, inbox/chat theo application. RBAC end-to-end, Docker Compose (Postgres + Redis) và Flyway migrations.",
    descriptionEn:
      "An end-to-end recruitment ERP: public jobs with filter/feed, applications (CV upload / resume library), Kanban pipeline with stage history and bulk actions, and application-based inbox/chat. End-to-end RBAC, Docker Compose (Postgres + Redis), and Flyway migrations.",
    tech: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security (RBAC)",
      "Maven",
      "PostgreSQL 15",
      "Redis",
      "Flyway",
      "Docker",
      "Docker Compose",
      "GitHub Actions (CI)",
    ],
    repoUrl: "https://github.com/qtuwn/ERP_HRM",
    videoUrl: "https://youtu.be/CuORfmbrXm8",
    caseStudyUrl: "/projects/erp-hrm",
    highlightsVi: [
      "Tuyển dụng end-to-end: Jobs → Apply → Kanban/Status → Messages/Inbox",
      "Auth đầy đủ: login/refresh/logout, verify email/OTP, đổi mật khẩu, quên mật khẩu (OTP/magic link có feature flag)",
      "RBAC rõ ràng ở BE (@PreAuthorize) và FE (RequireAuth/RequireRole + route map)",
      "Docker Compose ổn định (Postgres + Redis + healthcheck), Flyway migration/seed/index cho performance",
    ],
    highlightsEn: [
      "End-to-end recruitment flow: Jobs → Apply → Kanban/Status → Messages/Inbox",
      "Production-like auth lifecycle: login/refresh/logout, email/OTP verification, password change, password reset (OTP/magic link via feature flag)",
      "Clear RBAC on both BE (@PreAuthorize) and FE (RequireAuth/RequireRole + role-based routes)",
      "Solid local infra: Docker Compose (Postgres + Redis + healthchecks) and Flyway migrations/seed/indexing for performance",
    ],
    screenshots: [
      { key: "erp-hrm:1", alt: "ERP_HRM - Tổng quan" },
      { key: "erp-hrm:2", alt: "ERP_HRM - Job/Recruitment" },
      { key: "erp-hrm:3", alt: "ERP_HRM - Kanban pipeline" },
      { key: "erp-hrm:4", alt: "ERP_HRM - Inbox/Messages" },
      { key: "erp-hrm:5", alt: "ERP_HRM - Dashboard" },
      { key: "erp-hrm:6", alt: "ERP_HRM - Admin/RBAC" },
    ],
  },
  {
    slug: "metro-management",
    title: "METRO_MANAGEMENT",
    descriptionVi:
      "Hệ thống quản lý vé Metro full-stack: React 19 (Vite/Router) + Express + MongoDB. JWT auth (access/refresh + rotate/revoke), RBAC end-to-end, realtime nền tảng Socket.io và các luồng vận hành (staff validate vé, inspector kiểm tra thủ công, admin quản lý user/role).",
    descriptionEn:
      "A full-stack Metro ticket management system: React 19 (Vite/Router) + Express + MongoDB. Production-like JWT auth (access/refresh with rotate/revoke), end-to-end RBAC, Socket.io realtime foundation, and operational flows (staff gate validation, inspector manual inspection, admin user/role management).",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Socket.io (Realtime)",
      "React 19",
      "Vite",
      "React Router v7",
      "Axios",
      "Tailwind CSS",
      "Joi Validation",
    ],
    repoUrl: "https://github.com/qtuwn/METRO_MANAGEMENT",
    demoUrl: "https://github.com/qtuwn/METRO_MANAGEMENT",
    caseStudyUrl: "/projects/metro-management",
    highlightsVi: [
      "Backend tách lớp rõ (routes/controllers/middlewares/services/validators/models) + chuẩn hoá response",
      "Auth production-like: refresh token rotate/revoke; FE interceptor tự refresh khi 401",
      "RBAC end-to-end: backend guards + ProtectedRoute ở frontend, UI theo role",
      "Best-practices hooks: Joi validate, error handler tập trung, rate limit cơ bản, socket rooms theo user/role",
    ],
    highlightsEn: [
      "Layered backend structure (routes/controllers/middlewares/services/validators/models) with standardized API responses",
      "Production-like auth: refresh token rotate/revoke; FE interceptor auto-refresh on 401",
      "End-to-end RBAC: backend protection + frontend ProtectedRoute, role-based UI/features",
      "Best-practice foundations: Joi validation, centralized error handling, basic rate limiting, socket rooms by user/role",
    ],
  },
  {
    slug: "hanoki-home",
    title: "websitenoithat_hanokihome",
    descriptionVi:
      "Website bán đồ nội thất Hinoki/Hanoki Home viết theo PHP thuần (MVC), dùng MySQL (PDO/UTF-8) và session cho đăng nhập + giỏ hàng. Có product listing dạng card tải bằng AJAX, checkout tạo đơn hàng và admin dashboard cơ bản.",
    descriptionEn:
      "A furniture e-commerce website (Hinoki/Hanoki Home) built with vanilla PHP in an MVC structure. Uses MySQL via PDO and sessions for authentication and cart, with AJAX-based product listing, checkout/order persistence, and a basic admin dashboard.",
    tech: [
      "PHP",
      "MVC (Controllers/Models/Views)",
      "MySQL",
      "PDO",
      "Sessions",
      "AJAX",
      "REST-style API (products/categories)",
      "HTML/CSS",
      "JavaScript",
    ],
    repoUrl: "https://github.com/qtuwn/websitenoithat_hanokihome.git",
    demoUrl: "https://github.com/qtuwn/websitenoithat_hanokihome.git",
    caseStudyUrl: "/projects/hanoki-home",
    highlightsVi: [
      "Luồng mua hàng đầy đủ: danh sách → chi tiết → giỏ hàng → checkout → tạo đơn + order details (lưu DB)",
      "Auth + role admin/user bằng session (`$_SESSION['role']`), admin dashboard giới hạn quyền",
      "Router + REST API nội bộ: `/project1/{Controller}/{action}/{params...}` và `/project1/api/{resource}` theo HTTP method",
      "DB layer dùng PDO + UTF-8, quản lý uploads/static assets rõ ràng",
    ],
    highlightsEn: [
      "Complete e-commerce flow: list → detail → cart → checkout → orders persisted to DB",
      "Session-based auth with admin/user roles (`$_SESSION['role']`) and protected admin dashboard",
      "Custom router + REST-style API: `/project1/{Controller}/{action}/{params...}` and `/project1/api/{resource}` by HTTP method",
      "PDO-based DB layer with UTF-8 and clear uploads/static assets management",
    ],
  },
];
