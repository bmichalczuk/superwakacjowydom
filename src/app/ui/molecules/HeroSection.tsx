"use client";

import { Target } from "lucide-react";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
export const HeroSection = () => {
	const [coverPhoto, setCoverPhoto] = useState("bg-hero1");

	const handleBg: MouseEventHandler<HTMLButtonElement> = (e) => {
		if (e.target instanceof HTMLImageElement) {
			console.log(e.target.dataset.image);
			setCoverPhoto(e.target.dataset.image || "bg-hero2");
			return;
		}

		setCoverPhoto(`bg-hero1`);
	};

	return (
		<section
			className={`mx-auto flex flex-col items-center ${coverPhoto} bg-cover bg-center bg-no-repeat p-5 pt-24 sm:rounded-lg md:mt-5 md:max-w-screen-md md:p-10 md:pt-48 lg:max-w-screen-lg lg:rounded-lg`}
		>
			<h2 className="flex items-center justify-center">
				<div className="mb-16 rounded-lg bg-white p-5 text-center text-lg">
					<p className="text-2xl">Dom Wczasowy</p>
					<p className="text-sm">Apartamenty 2, 3, 4 osobowe. Basen i restauracja.</p>
				</div>
			</h2>
			<ul className="flex flex-row justify-around">
				<li className="mx-1 h-24 overflow-hidden rounded-lg bg-white p-1 md:h-36">
					<button className="block h-full w-full" title="1" onClick={handleBg}>
						<Image
							className="h-full"
							data-image="bg-hero1"
							src="/hero/hero1.jpg"
							alt=""
							width={300}
							height={100}
						/>
					</button>
				</li>
				<li className="mx-1 h-24 max-w-lg overflow-hidden rounded-lg bg-white p-1 md:h-36">
					<button className="block h-full w-full" title="2" onClick={handleBg}>
						<Image
							data-image="bg-hero2"
							className="h-full"
							src="/hero/hero2.jpg"
							alt=""
							width={300}
							height={100}
						/>
					</button>
				</li>
				<li className="mx-1 h-24 overflow-hidden rounded-lg bg-white p-1 md:h-36">
					<button className="block h-full w-full" title="3" onClick={handleBg}>
						<Image
							data-image="bg-hero3"
							className="h-full"
							src="/hero/hero3.jpg"
							alt=""
							width={300}
							height={100}
						/>
					</button>
				</li>
				<li className="mx-1 h-24 overflow-hidden rounded-lg bg-white p-1 md:h-36">
					<button className="block h-full w-full" title="4" onClick={handleBg}>
						<Image
							data-image="bg-hero4"
							className="h-full"
							src="/hero/hero4.jpg"
							alt=""
							width={300}
							height={100}
						/>
					</button>
				</li>
			</ul>
		</section>
	);
};
