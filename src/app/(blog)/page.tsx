import BlogList from "@/components/BlogList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex md:flex-row flex-col gap-8 container mx-auto mt-10">
        <Image
          src="/dummy.jpg"
          alt="a person is tracking alone"
          height={270}
          width={700}
          className="h-70 w-full md:w-1/2 md:h-1/3"
        />
        <div className="space-y-5 md:space-y-10 flex flex-col-reverse md:flex-col justify-evenly ">
          <Link href="/" className="space-y-5 md:space-y-10">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide font-dm-serif">
              A person is tracking alone through the mountain.
            </h1>
            <p className="font-montserrat">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              rem, officiis aliquid quia dolor ducimus unde deleniti eveniet
              harum accusamus! Aperiam neque reiciendis beatae, autem
              dignissimos, iusto amet nobis minima eaque tenetur ullam magnam
              ducimus. Dolor, quod sapiente repudiandae reiciendis debitis,
              voluptatem eum ipsum possimus quae officia voluptates eligendi
              nemo? Placeat exercitationem eos sapiente, eveniet incidunt
              numquam similique deleniti nobis itaque libero temporibus. Quasi
              sapiente libero quidem rem omnis. Sunt?
            </p>
          </Link>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <div>
              <p>Dainwi Choudhary</p>
              <p>27/02/2004</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-10 bg-foreground" />

      <BlogList />
    </main>
  );
}
