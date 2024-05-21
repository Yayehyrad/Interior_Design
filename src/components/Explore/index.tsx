import GridImage from "../GridImage";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";
import four from "../../assets/images/four.jpg";
import five from "../../assets/images/five.jpg";
import six from "../../assets/images/six.jpg";
import seven from "../../assets/images/seven.jpg";
import eight from "../../assets/images/eight.jpg";
import nine from "../../assets/images/nine.jpg";
import ten from "../../assets/images/ten.jpg";

const Explore = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 lg:py-10 py-8 flex flex-col items-center justify-center gap-5">
			<div className="flex flex-col items-center">
				<span className="text-[15px] text-[#425e85]">Explore</span>
				<span className="font-semibold text-[30px] text-center">
					Our Latest Interior Designs
				</span>
				<p className="mt-3 text-gray-500 text-center max-w-[500px]">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellendus
					error.
				</p>
			</div>
			<div className="grid grid-cols-5 grid-rows-8 gap-4 w-full h-[800px] m-8">
				<GridImage
					image={one}
					layout="col-span-2 row-span-3"
				/>
				<GridImage
					image={two}
					layout="col-span-2 row-span-3 col-start-3"
				/>
				<GridImage
					image={three}
					layout="row-span-3 col-start-5"
				/>
				<GridImage
					image={four}
					layout="row-span-2 row-start-4"
				/>
				<GridImage
					image={five}
					layout="col-span-2 row-span-2 row-start-4"
				/>
				<GridImage
					image={six}
					layout="col-span-2 row-span-2 col-start-4 row-start-4"
				/>
				<GridImage
					image={seven}
					layout="col-span-2 row-span-3 row-start-6"
				/>
				<GridImage
					image={eight}
					layout="row-span-3 col-start-3 row-start-6"
				/>
				<GridImage
					image={nine}
					layout="row-span-3 col-start-5 row-start-6"
				/>
				<GridImage
					image={ten}
					layout="row-span-3 col-start-4 row-start-6"
				/>
			</div>
		</div>
	);
};

export default Explore;
