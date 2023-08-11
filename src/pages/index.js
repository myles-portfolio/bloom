import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-cols-2 min-h-[calc(100vh-72px)]">
			<div className="bg-[#dbdbdb] text-black border-solid border-black border-r-2">
				<div className="pt-16 pr-6 pb-19">
					<div className="max-w-2xl mx-auto">
						<div className="grid w-full max-w-screen-md mx-auto justify-items-center items-stretch content-start grid-auto-cols-1 gap-x-0 gap-y-12 grid-cols-1 text-center pt-16">
							<Image
								src="/assets/ndevr-logo.svg"
								className="callout-image"
								alt="hero-image"
								width={220}
								height={75}
							></Image>
							<h1>
								The most <br /> epic developer resource library.
							</h1>
							<p className="text-lg leading-5 tracking-tight">
								Thousands of developer resources, all in one place.
							</p>
							<Link href="/products" className="cursor-pointer relative p-0">
								<button className="relative z-10 p-4 rounded-md bg-[#246AEB] text-white text-lg text-center no-underline border-solid border-black border">
									Start Learning
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#F4F2F2]">
				<div className="pt-16 pr-6 pb-19 flex mx-auto justify-center items-center">
					<div className="flex mx-auto justify-center items-center">
						<Image
							src="/assets/ideas-in-education.svg"
							className="callout-image"
							alt="hero-image"
							width={800}
							height={800}
						></Image>
					</div>
				</div>
			</div>
		</div>
	);
}
