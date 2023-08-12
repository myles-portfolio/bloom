import PromoCard from "@/resources/components/PromoCard";
import { supabase } from "@/supabase";
import Image from "next/image";

export default function ResourcePage({ resource }) {
	return (
		<div>
			<section className="resource-section">
				<article className="resource">
					<div className="resource-wrap">
						<Image
							width={1000}
							height={400}
							src={`/assets/brand/${resource.slug}-lg.png`}
							alt={resource.name}
						/>
					</div>
					<section>
						<header className="flex flex-row p-4 justify-between items-end">
							<div>
								<h2>{resource.name}</h2> by {resource.developer}
							</div>
							<span className="pill h-8">{resource.category}</span>
						</header>

						<section>
							<div>
								<p>{resource.description}</p>
							</div>
						</section>
					</section>
					<section>
						<PromoCard resource={resource} />
					</section>
				</article>
			</section>
		</div>
	);
}

export const getStaticPaths = async () => {
	const { data: resources } = await supabase.from("resource").select("slug");

	const paths = resources.map((resource) => ({
		params: {
			slug: resource.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const slug = context.params.slug;
	const { data: resource } = await supabase
		.from("resource")
		.select("*")
		.eq("slug", slug)
		.single();

	return { props: { resource } };
};
