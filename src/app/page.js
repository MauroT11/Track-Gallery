import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function Home() {

  const comment = (await sql`select * from comments`)
  console.log(comment)
  return (
    <main className="flex flex-col items-center justify-between">
      
    </main>
  );
}
