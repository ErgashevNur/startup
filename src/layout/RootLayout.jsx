import { useSelector } from "react-redux";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const currentPath = location.pathname;

    // foydalanuvchi login yoki register bo‘lsa, home ga yo‘naltirish
    if (user && (currentPath === "/login" || currentPath === "/register")) {
      navigate("/home", { replace: true });
    }

    // Faqat sahifa birinchi marta yuklanganda tekshirish
    if (!user && !["/login", "/register", "/"].includes(currentPath)) {
      navigate("/login", { replace: true });
      toast.error("Please log in first");
    }
  }, [user]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="bg-background text-foreground min-h-screen">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}