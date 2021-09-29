import React, { useState } from 'react';

import useSnackbar, { types } from 'utils/snackbar';
import { Input } from '@material-ui/core';
import { create_discussion } from 'services/firebase/discussion-service';

function CreatePostDialog({ setIsDialogOpen, user }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const openSnackbar = useSnackbar();

	const handleStartDiscussion = async () => {
		try {
			await create_discussion(user, title, description);
			setIsDialogOpen(false);
			openSnackbar('Discussion Created Successfully!', types.SNACKBAR_SUCCESS);
		} catch (err) {
			openSnackbar(err.message);
		}
	};

	return (
		<div>
			<div className='limiter'>
				<div className='container-login100' style={{ backgroundImage: 'url("assets/bg-01.jpg")' }}>
					<div className='wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'>
						<span className='login100-form-title p-b-49'>START DISCUSSION</span>
						<div className='wrap-input100 m-b-23'>
							<Input autoCorrect={false} onChange={(e) => setTitle(e.target.value)} value={title} className='input100' type='password' placeholder='ENTER TOPIC' rows={2} multiline={true} fullWidth={true} />
						</div>
						<div className='wrap-input100'>
							<Input autoCorrect={false} onChange={(e) => setDescription(e.target.value)} value={description} className='input100' type='password' placeholder='ENTER DESCRIPTION' rows={10} multiline={true} fullWidth={true} />
						</div>
						<div className='text-right p-t-8 p-b-31'>Starting as {user.displayName}</div>
						<div className='container-login100-form-btn'>
							<div className='wrap-login100-form-btn'>
								<div className='login100-form-bgbtn' />
								<button className='login100-form-btn' onClick={handleStartDiscussion}>
									START
								</button>
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20 }}>
							<button onClick={() => setIsDialogOpen(false)} className='txt2'>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePostDialog;
