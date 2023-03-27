import Image from "../assets/taj.jpg";

export default function Hero() {
	return (
		<div className="hero">
			<>
				<div className="absolute md:relative -z-10 opacity-30 md:opacity-90 ">
					<img
						src={Image}
						alt="Taj Mahal"
						className="w-full h-full"
                        />
				</div>
			</>
                        {/* place this div a bit upper */}
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-5xl font-bold">Travel Where You Want</h1>
                <p className="">Find the best tours in India</p>
                <button className="btn btn-primary">Explore</button>
            </div>
		</div>
	);
}
