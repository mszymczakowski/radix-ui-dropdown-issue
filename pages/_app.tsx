import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="max-w-6xl py-2 mx-auto">
            <div className="px-4 py-2 bg-white border rounded-md shadow-lg">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
