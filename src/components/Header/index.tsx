import { Cart, ChevronDown, LogoInstagram, Person } from "react-ionicons";
import bg from "../../assets/images/bg.jpg";

const Header = () => {
	const navItems = [
		{ path: "/", title: "Home" },
		{ path: "/", title: "Designs" },
		{ path: "/", title: "Customers" },
		{ path: "/", title: "About" },
		{ path: "/", title: "Contact" },
	];
	return (
		<div
			className="w-full h-screen relative bg-cover bg-center flex items-center justify-center"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="flex items-center justify-between absolute top-5 z-50 w-full md:px-[150px] px-5">
				<div className="text-white font-semibold text-[30px]">Interior.</div>
				<div className="items-center lg:flex hidden gap-5">
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className="text-white no-underline font-light"
						>
							{item.title}
						</a>
					))}
				</div>
				<div className="flex items-center gap-5">
					<Person
						color="white"
						cssClasses={"cursor-pointer"}
					/>
					<Cart
						color="white"
						cssClasses={"cursor-pointer"}
					/>
					<LogoInstagram
						color="white"
						cssClasses={"cursor-pointer"}
					/>
				</div>
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-20"></div>
			<div className="flex flex-col gap-2 items-center">
				<div className="text-white lg:text-[60px] text-[40px] font-semibold z-50 text-center">
					Build Your Home With Experts
				</div>
				<p className="text-gray-300 text-[15px] z-50 text-center lg:max-w-[700px] max-w-[450px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab suscipit iste eaque
					quas quisquam quod ut nihil reiciendis veniam.
				</p>
				<button className="text-[#333] rounded-full bg-white font-medium px-5 py-3 w-fit mt-5 z-50">
					Explore Our Designs
				</button>
			</div>
			<div className="absolute bottom-5 w-full px-[150px] z-50 flex items-center justify-center">
				<ChevronDown
					color={"white"}
					width="30px"
					height="30px"
					cssClasses={"animate-bounce"}
				/>
			</div>
		</div>
	);
};

export default Header;
