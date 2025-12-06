import { SidebarTrigger } from "@/components/ui/sidebar";

export default function TopNav({ title, items }) {
  return (
    <div className="w-full bg-white border-b p-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <SidebarTrigger />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="flex space-x-4 text-sm">
        {items?.map((item, i) => (
          <button key={i} className="hover:underline">{item}</button>
        ))}
      </div>
    </div>
  );
}

