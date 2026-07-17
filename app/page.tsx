import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserSubscriptions } from "@/lib/actions";
import { checkAndRequestRenewalUpdates } from "./dashboard/subscriptions/actions";
import { Subscription } from "@/types/subscription";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-up");
  }

  await auth.protect();
  
  await checkAndRequestRenewalUpdates(userId);

  const subscriptions = await getUserSubscriptions(userId);

  const totalMonthly = subscriptions.reduce((acc: number, sub: Subscription) => {
    return acc + (sub.cycle === "monthly" ? sub.cost : sub.cost / 12);
  }, 0);

  const totalYearly = totalMonthly * 12;

  const stats = [
    { label: "Total monthly", value: totalMonthly, suffix: "/ mo" },
    { label: "Total yearly", value: totalYearly, suffix: "/ yr" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10 border-b border-dashed border-[#eef0e9]/15 pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl mt-4 mb-3">Overview</h1>
        <p className="text-[#a8ada6] max-w-xl leading-relaxed">
          Your subscriptions, totalled up like a monthly statement.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#eef0e9]/10 border border-[#eef0e9]/10 rounded-sm bg-[#161b22]">
        {stats.map((stat) => (
          <div key={stat.label} className="p-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#6b7069] mb-4">
              {stat.label}
            </p>
            <p className="font-mono text-3xl sm:text-4xl text-[#eef0e9] tracking-tight">
              ₹
              {stat.value.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <span className="text-sm text-[#6b7069] ml-1">{stat.suffix}</span>
            </p>
          </div>
        ))}

        <div className="p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#6b7069] mb-4">
            Active subscriptions
          </p>
          <p className="font-mono text-3xl sm:text-4xl text-[#eef0e9] tracking-tight">
            {subscriptions.length}
            <span className="text-sm text-[#6b7069] ml-1">units</span>
          </p>
        </div>
      </div>
    </div>
  );
}