/** @type {import('next').NextConfig} */

const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.thecocktaildb.com",
				port: "",
				pathname: "/images/**",
			},
		],
	},
};

export default nextConfig;
