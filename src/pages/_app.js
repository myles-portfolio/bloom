import RootLayout from "@/core/layouts/layout";
import "src/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}
