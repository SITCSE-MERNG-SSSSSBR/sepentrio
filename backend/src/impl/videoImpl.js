export const uploadVid = async (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({message: 'Requested file does not exist.'});
		}

		const videoFile = req.file;
		const videoTitle = req.body.title;
		const videoDescription = req.body.description;
		const userID = req.user.ID;

		// generate HLS format. Use videoFile.path
		
		const newVideo = { videoTitle, videoDescription, videoURL, userID };

		await newVideo.save();
		res.status(201).json({
			message: 'Video upload successful. Converted',
			video: newVideo,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Error uploading' });
	}
};

export const listAllVid = async (req, _) => {
	try {
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;
		const skip = (page - 1) * limit;

		const videos = await Video.toList().skip(skip).limit(limit);
		// TODO

	} catch (err) {
		console.error(err);
	}
};	
