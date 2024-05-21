import banner from "../../assets/images/banner.jpg";

const Banner = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 md:py-10 py-8 h-[700px]">
			<div
				className="w-full h-full bg-center bg-cover fex items-center rounded-lg"
				style={{ backgroundImage: `url(${banner})` }}
			>
				<div className="w-full bg-[#000000c2] lg:w-1/2 lg:px-0 px-10 h-full flex items-center justify-center rounded-tl-lg rounded-bl-lg">
					<div className="flex flex-col items-start">
						<span className="text-white text-[15px] lg:w-fit lg:text-left w-full text-center">
							Our Mission
						</span>
						<div className="font-semibold text-[50px] text-center text-white">
							We Care About Top Quality
						</div>
						<p className="mt-3 text-gray-200 max-w-[500px] lg:text-left text-center leading-7">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi veniam
							minima exercitationem harum dignissimos itaque, eum asperiores nemo distinctio
							autem qui officiis id amet error ipsum blanditiis molestiae. Delectus?
						</p>
						<button className="text-[#333] lg:mx-0 mx-auto rounded-full bg-white font-medium px-5 py-3 w-fit mt-5 z-50">
							Explore Our Designs
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
