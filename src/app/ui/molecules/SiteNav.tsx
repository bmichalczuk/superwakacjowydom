"use client";
import { useState } from "react";
import { ActiveLink } from "../atoms/ActiveLink";
import { MenuIcon, X } from "lucide-react";
import clsx from "clsx";
export const SiteNav = () => {
	const [menuOpened, changeMenuOpened] = useState(false);
	const handleMenuButton = () => {
		changeMenuOpened(!menuOpened);
		console.log(menuOpened);
	};
	return (
		<nav
			className={clsx(
				"ml-auto flex flex-row-reverse border align-middle text-xl sm:ml-0 sm:mr-auto",
				menuOpened && "absolute bottom-0 left-0 right-0 top-0 z-20 bg-white p-5 sm:static sm:p-0",
			)}
		>
			<button
				onClick={handleMenuButton}
				className={clsx("flex sm:hidden")}
				title={menuOpened ? "Close menu" : "Open menu"}
			>
				<span className="sr-only">{menuOpened ? "Close menu" : "Open menu"}</span>
				{menuOpened ? <X width={50} height={50} /> : <MenuIcon width={50} height={50} />}
			</button>
			<ul
				className={clsx(
					"flex flex-row items-center align-middle sm:flex",
					!menuOpened && "hidden",

					menuOpened && "mt-20 flex-1 flex-col border bg-white pt-5 sm:mt-0 sm:flex-row sm:pt-0",
				)}
			>
				<li>
					<ActiveLink
						exact={true}
						className="mr-3 uppercase hover:cursor-pointer"
						activeClassName="underline text-red"
						href="/pokoje"
					>
						Pokoje
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						exact={true}
						className="mr-3 uppercase hover:cursor-pointer"
						activeClassName="underline text-red"
						href="/restauracja"
					>
						Restauracja
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						exact={true}
						className="mr-3 uppercase hover:cursor-pointer"
						activeClassName="underline text-red"
						href="/oferta"
					>
						Oferta
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						exact={true}
						className="mr-3 uppercase hover:cursor-pointer"
						activeClassName="underline text-red"
						href="/kontakt"
					>
						Kontakt
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
