import { BrushOutline, LeafOutline, RainyOutline, RibbonOutline } from "react-ionicons";

const Services = () => {
	const services = [
		{
			title: "Modern Design",
			icon: BrushOutline,
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aliquam.",
		},
		{
			title: "Outdoor Solutions",
			icon: RainyOutline,
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aliquam.",
		},
		{
			title: "Environment Friendly",
			icon: LeafOutline,
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aliquam.",
		},
		{
			title: "Top Quality",
			icon: RibbonOutline,
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aliquam.",
		},
	];
	return (
		<div className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-center justify-between gap-8">
			{services.map((service) => (
				<div
					key={service.title}
					className="flex flex-col items-center gap-3"
				>
					<service.icon
						color="#425e85"
						width={"50px"}
						height={"50px"}
					/>
					<span className="font-semibold text-[20px]">{service.title}</span>
					<p className="text-gray-600 leading-7 text-center max-w-[350px]">{service.desc}</p>
					<a
						href="#"
						className="text-[#425e85]"
					>
						Read More
					</a>
				</div>
			))}
		</div>
	);
};

export default Services;
