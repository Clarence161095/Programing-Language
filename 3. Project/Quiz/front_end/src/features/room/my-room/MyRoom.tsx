/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import { BarcodeOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { Space, Typography, Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { makeCode } from 'utils/Common';
import LocalStorageService from '../../../utils/LocalStorageService';
import './MyRoom.scss';

const HOST_URL = process.env.REACT_APP_API_URL;

const { Title, Text } = Typography;

let myRoom = {
	uid: 'Common',
	name: 'name of room',
	code: '1234',
};
if (LocalStorageService.getDecodeObject('my_room')) {
	myRoom = LocalStorageService.getDecodeObject('my_room');
} else {
	if (LocalStorageService.getDecodeObject('user')) {
		const user = LocalStorageService.getDecodeObject('user');
		myRoom = {
			uid: user?.['uid'],
			name: user?.['displayName'],
			code: '1234',
		};
		LocalStorageService.setEncode('my_room', myRoom);
	}
}

const MyRoom = () => {
	const socketRef = useRef({} as Socket);
	const userVideo = useRef({} as any);
	const canvasRef = useRef({} as any);
	const canvasRef2 = useRef({} as any);
	const [shareVideo, setShareVideo] = useState(false);
	const [roomInfoState, setRoomInfoState] = useState(myRoom);

	useEffect(() => {
		socketRef.current = io(HOST_URL || 'http://localhost:9000', {
			transports: ['websocket'],
		}) as Socket;

		canvasRef2.current.width = userVideo.current.videoWidth;
		canvasRef2.current.height = userVideo.current.videoHeight;

		socketRef.current.on(`${roomInfoState.uid}_info`, (payload: any) => {
			console.log(`payload`, payload);
			canvasRef2.current
				.getContext('2d')
				.drawImage(
					payload,
					0,
					0,
					canvasRef2.current.width,
					canvasRef2.current.height,
				);
		});
	}, []);

	const handleEditNameMyRoom = (payload: any) => {
		const myRoom = {
			...roomInfoState,
			name: payload,
		};

		socketRef.current.emit('edit_my_room', myRoom);

		setRoomInfoState(myRoom);
		LocalStorageService.setEncode('my_room', myRoom);
	};

	const randomPassCode = () => {
		const myRoom = {
			...roomInfoState,
			code: makeCode(6),
		};

		socketRef.current.emit('edit_my_room', myRoom);

		setRoomInfoState(myRoom);
		LocalStorageService.setEncode('my_room', myRoom);
	};

	const handleShareVideo = async () => {
		setShareVideo(!shareVideo);
		if (shareVideo) {
			try {
				userVideo.current.srcObject =
					(await navigator.mediaDevices.getUserMedia({
						audio: false,
						video: {
							width: 300,
							height: 200,
							frameRate: { ideal: 10, max: 60 },
						},
					})) as any;
			} catch (err) {
				/* handle the error */
			}
		} else {
			userVideo.current.srcObject?.getTracks().forEach((track: any) => {
				track.stop();
			});
		}
	};

	const handleSnapshotVideo = () => {
		canvasRef.current.width = userVideo.current.videoWidth;
		canvasRef.current.height = userVideo.current.videoHeight;
		canvasRef.current
			.getContext('2d')
			.drawImage(
				userVideo.current,
				0,
				0,
				canvasRef.current.width,
				canvasRef.current.height,
			);

		const nowImage = canvasRef.current
			.getContext('2d')
			.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);

		socketRef.current.emit(`${roomInfoState.uid}_info`, nowImage);
	};

	return (
		<div className='my_room'>
			<Space direction='vertical'>
				<Title
					style={{ color: '#fff' }}
					editable={{ onChange: handleEditNameMyRoom }}>
					{roomInfoState.name}
				</Title>
				<Space direction='horizontal'>
					<Button onClick={randomPassCode} icon={<BarcodeOutlined />}>
						Random PassCode
					</Button>
					<Text
						code
						style={{ color: '#fff', fontSize: '1.5rem' }}
						copyable={{
							// TODO: handle copy link
							text: roomInfoState.code,
							tooltips: ['Copy link', 'Copied link'],
						}}>
						{roomInfoState.code}
					</Text>
				</Space>
				<Button onClick={handleShareVideo} icon={<VideoCameraAddOutlined />}>
					Share Video
				</Button>
				<video className='my_room_video' autoPlay ref={userVideo} />
				<Button onClick={handleSnapshotVideo}>Take snapshot</Button>
				<canvas ref={canvasRef} className='my_room_video_canvas'></canvas>
				<canvas ref={canvasRef2} className='my_room_video_canvas'></canvas>
			</Space>
		</div>
	);
};

export default MyRoom;
