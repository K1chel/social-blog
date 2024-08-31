import { Trends } from "@/components/trends";

export default async function Home() {
  return (
    <div className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <p>MAIN</p>
      </div>
      <Trends />
    </div>
  );
}
