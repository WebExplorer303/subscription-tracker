
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
<div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
  <Navbar />
  <main className="flex-1 overflow-y-auto p-6 sm:p-10">{children}</main>
</div>
  );
}
