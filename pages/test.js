import Link from "next/link";

export default function test() {
  const num = 1;
  return (

    <div className="container">
      <Link href="/"><li>/home</li></Link>

     {num}

      
     
    </div>
  );
}