import classic from "../../assets/images/classic.jpg";
import luxury from "../../assets/images/luxury.jpg";
import surreal from "../../assets/images/surreal.jpg";
import bright from "../../assets/images/bright.jpg";

const Collections = () => {
	const collectionItems = [
		{
			title: "Classic",
			image: classic,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis, ad modi expedita, velit aperiam dignissimos voluptas",
		},
		{
			title: "Luxury",
			image: luxury,
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam sint culpa aperiam, maiores velit, delectus iure.",
		},
		{
			title: "Light , Bright",
			image: bright,
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam sint culpa aperiam, maiores velit, delectus iure.",
		},
		{
			title: "Surreal",
			image: surreal,
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam sint culpa aperiam, maiores velit, delectus iure.",
		},
	];
	return (
		<div className="w-full lg:px-[150px] px-5 pb-8 flex lg:flex-row flex-col items-center justify-between gap-8">
			{collectionItems.map((item, index: number) => (
				<div
					key={index}
					className="w-full h-[600px] bg-center bg-cover relative p-6 cursor-pointer"
					style={{ backgroundImage: `url(${item.image})` }}
				>
					<div className="w-full h-full absolute bg-black opacity-45 z-20 top-0 left-0"></div>
					<div className="flex flex-col">
						<div className="text-white font-semibold text-[20px] z-50">{item.title}</div>
						<div className="text-white font-semibold text-[20px] z-50">Collection</div>
					</div>
					<div className="absolute bottom-6 z-50 flex flex-col gap-6">
						<p className="text-gray-100 leading-6 text-[14px] lg:text-left text-center">
							{item.desc}
						</p>
						<a
							href="#"
							className="text-white font-light text-[17px]"
						>
							Read More
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Collections;
