import logo from '../assets/logo.png'

export default function Navbar() {
	return (
		<div className="navbar bg-base-100 fixed">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl" href="/">
					<img src={logo} alt="logo" />
					{"\u200b\u200b"}   Tour Finder
				</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Contact us</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
