import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
	return (
		<div className="nav-container border-black border-b-2">
			<Link href="/">
				<Logo />
			</Link>

			<div className="nav-menu">
				<Link href="/login" className="nav-link white">
					Log in
				</Link>
				<Link href="/pricing" className="nav-link black">
					Pricing
				</Link>
			</div>
		</div>
	);
}
