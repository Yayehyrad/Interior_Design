const Intro = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-start justify-center gap-16">
			<div className="flex flex-col">
				<span className="text-[15px] text-[#425e85]">About Us</span>
				<span className="font-semibold text-[30px] max-w-[350px]">
					Top Solutions By Professional Designers
				</span>
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-gray-600 leading-7 max-w-[500px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex nesciunt
					molestias sit ad dolor ducimus est facere velit, eveniet consequuntur sapiente
					aliquid in ipsa magnam dolorum. Veritatis, a deleniti?
				</p>
				<button className="text-white rounded-full bg-[#333] font-medium outline-none px-5 py-3 w-fit mt-5 z-50">
					Explore Our Designs
				</button>
			</div>
		</div>
	);
};

export default Intro;
