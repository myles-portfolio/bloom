export default function ResourcesPage() {
	return (
		<>
			<div className="relative pt-16 pb-20 border-b-2 border-black bg-[var(--color-royal-blue)]">
				<div className="w-full px-[4vw]">
					<div className="grid w-[65vw] max-w-[45rem] mx-auto flex-col justify-center grid-cols-1 gap-x-0 gap-y-[default] text-center">
						<h1>The latest resources</h1>
					</div>
				</div>
			</div>

			<div className="relative pt-12 pb-16 border-b-2 border-black">
				<div className="w-full px-[4vw]">
					<ul className="resource-card-grid"></ul>
				</div>
			</div>
		</>
	);
}
