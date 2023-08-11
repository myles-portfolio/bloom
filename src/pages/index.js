import Image from "next/image";
import Link from "next/link";
import ideasInEducation from "../../public/assets/ideas-in-education.svg";

export default function Home() {
	return (
		<div className="grid grid-cols-2 min-h-[calc(100vh-72px)]">
			<div className="bg-[#dbdbdb] text-black border-solid border-black border-r-2">
				<div className="pt-32 pb-19">
					<div className="max-w-2xl mx-auto">
						<div className="grid w-full max-w-screen-md mx-auto justify-center items-start content-start gap-y-12 pt-16">
							<h1 className="text-left">
								The most <br /> epic developer resource library.
							</h1>
							<p className="text-lg leading-5 tracking-tight text-left">
								Thousands of developer resources, all in one place.
							</p>
							<div className="flex justify-center">
								<Link href="/resources" className="cursor-pointer relative p-0">
									<button className="py-4 px-16 rounded-md bg-[#246AEB] text-white text-lg text-center no-underline border-solid border-black border">
										Start Learning
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#F4F2F2] w-full">
				<div className="pt-16 pb-19 mx-auto flex justify-center items-center">
					<div className="w-full flex justify-center items-center">
						<Image
							className="w-full min-w-full"
							src={ideasInEducation}
							alt="hero-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
