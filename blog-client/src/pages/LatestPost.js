import { Heart, MessageCircle, Share, Calendar } from 'lucide-react';
import thumnail from '../images/image.jpeg';
const LatestPost = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="w-[80%] grid md:grid-cols-3 gap-8">
				<div className="md:col-span-2">
					<img
						src={thumnail}
						alt="ByteByteGo logo"
						className="h-50 w-50 rounded-md bg-teal-500 items-center jusitfy-center"
					/>
				</div>

				<div>
					<div className="p-6 text-center">
						<h2 className="text-2xl font-semibold mb-4 text-theme-paragraph-header">
							Arm: AI will turn smartphones into ‘proactive assistants’
						</h2>
						<p className="text-theme-paragraph mb-4">
							Arm wants to upgrade the brains inside our devices. The chip
							designer — whose architectures power 99% of smartphones —
							envisions AI bringing a new wave of breakthroughs to our handsets.
						</p>
						<div className="flex items-center justify-center text-center text-gray-500 text-sm">
							<Calendar className="w-4 h-4 text-gray-500 mr-2" />
							<span>MAY 17, 2022 · Alice Bob</span>
						</div>
						<div className="flex items-center justify-center text-center text-gray-500 text-sm mt-2 space-x-4">
							<span className="flex items-center">
								<Heart className="w-4 h-4 text-gray-500 mr-1" /> 2103
							</span>
							<span className="flex items-center">
								<MessageCircle className="w-4 h-4 text-gray-500 mr-1" /> 51
							</span>
							<span className="flex items-center">
								<Share className="w-4 h-4 text-gray-500" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LatestPost;
