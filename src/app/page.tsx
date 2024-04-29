import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="visible md:invisible">
        <Image alt="Mountains" src="/test.jpg" layout="fill" objectFit="fill" />
      </div>
      <div className="invisible md:visible flex justify-center">
        <Image alt="Mountains" src="/test.jpg" height={300} width={300} />
      </div>
    </>
  );
}
