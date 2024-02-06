"use client";

import { Toaster } from "react-hot-toast";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Toaster />
			{children}
		</>
	);
};

export default Providers;
