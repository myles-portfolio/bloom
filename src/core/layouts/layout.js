import Meta from "@/core/components/Meta";
import Navbar from "@/core/components/Navbar";

export default function RootLayout({ children }) {
	return (
		<>
			<Meta />
			<Navbar />
			{children}
		</>
	);
}
