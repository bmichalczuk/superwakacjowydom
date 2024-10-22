import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";
import { SiteNav } from "../molecules/SiteNav";

export const HeroSection = () => {
	return (
		<header className="flex flex-row border border-sky-500 p-5 align-middle">
			<h1 className="flex items-center justify-center align-middle text-4xl sm:mr-auto">
				<Link href="/" title="Idź na stronę główną ">
					WakacjowyDom
				</Link>
			</h1>
			<SiteNav />
		</header>
	);
};
