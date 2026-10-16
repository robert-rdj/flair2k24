import Image from "next/image";

const posters = [
	{ src: "/assets/posters/spidey_prompts.webp", title: "Spidey Prompts" },
	{ src: "/assets/posters/sinister_hunt.webp", title: "Sinister Hunt" },
	{ src: "/assets/posters/quantum_quest.webp", title: "Quantum Quest" },
	{ src: "/assets/posters/multiversal_linkup.webp", title: "Multiversal Linkup" },
	{ src: "/assets/posters/collider_conclave.webp", title: "Collider Conclave" },
	{ src: "/assets/posters/code_swing.webp", title: "Code Swing" },
	{ src: "/assets/posters/glitch_verse_guess.webp", title: "Glitch Verse Guess" },
	{ src: "/assets/posters/into_the_memeverse.webp", title: "Into the Memeverse" },
];

export const metadata = {
	title: "Events | Flair 2k24",
};

export default function EventsPage() {
	return (
		<main className="min-h-screen bg-white px-5 pb-20 pt-32 text-black sm:px-10 lg:px-16">
			<header className="mx-auto mb-14 max-w-7xl border-b border-black/15 pb-8">
				<p className="mb-4 text-sm uppercase tracking-[0.35em] text-black/55">
					Flair IT 2k24
				</p>
				<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
					<h1 className="text-6xl uppercase leading-[0.85] sm:text-8xl lg:text-9xl">
						Events
					</h1>
					<p className="max-w-xs font-sans text-sm leading-relaxed text-black/60">
						Explore the challenges, showcases, and experiences waiting in the
						Spider-Verse.
					</p>
				</div>
			</header>

			<section
				aria-label="Event posters"
				className="mx-auto grid max-w-6xl grid-cols-1 gap-y-14"
			>
				{posters.map((poster, index) => (
					<article
						key={poster.src}
						className="group"
					>
						<div className="relative aspect-video overflow-hidden bg-black/[0.03]">
							<Image
								src={poster.src}
								alt={`${poster.title} event poster`}
								fill
								priority={index < 4}
								sizes="(min-width: 1024px) 1200px, 100vw"
								className="object-contain transition duration-500 ease-out group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/0 transition duration-500" />
						</div>
						<div className="flex items-center justify-between border-b border-black/15 py-4">
							<h2 className="text-xl uppercase tracking-wide">{poster.title}</h2>
							<span className="font-sans text-xs text-black/50">
								{String(index + 1).padStart(2, "0")}
							</span>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}
