const DrinksLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className='max-w-xl'>
			<div className='mockup-code mb-8'>
				<pre data-prefix='$'>
					<code>npx create-next-app@lates nextjs-tutorial</code>
				</pre>
			</div>
			{children}
		</div>
	);
};

export default DrinksLayout;
