/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ResourceCard({ resource }) {
	return (
		<article className="resource-card">
			<Link
				className="resource-image border border-black"
				href={`/resources/${resource.slug}`}
			>
				<img src={`/assets/brand/${resource.slug}.png`} alt={resource.name} />
			</Link>
			<header className="w-full">
				<p className="font-bold text-center w-full">{resource.name}</p>
			</header>
			<footer className="w-full">
				<Link href={`/resources/${resource.slug}`}>Explore</Link>
				<div>
					<span className="pill">{resource.category}</span>
				</div>
			</footer>
		</article>
	);
}
