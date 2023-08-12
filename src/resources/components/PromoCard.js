import Link from "next/link";

export default function PromoCard({ resource }) {
	return (
		<section>
			<div>
				<div>
					<h3>Features:</h3>
					<p style={{ fontSize: "1rem", paddingBottom: "1.25rem" }}>
						<ul>
							{resource.features.map((feature, index) => (
								<li className="promo-list-item" key={index}>
									{feature}
								</li>
							))}
						</ul>
					</p>
					<Link className="flex justify-center" href={resource.url}>
						<button className="py-1 px-16 rounded-md bg-[var(--color-royal-blue)] text-white text-lg text-center no-underline border-solid border-black border">
							Try It ➜
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
