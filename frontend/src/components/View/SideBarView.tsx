import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { Button } from '../Shared';

type SideBarViewProps = {
	open : boolean;
	handleSideBarClose : () => void;
}

// View는 Controller의 data 및 function을 사용하여 사용자와 상호작용
function SideBarView({ open, handleSideBarClose } : SideBarViewProps) {
	return (
		<Grid className="sidebar">
			<header className="sidebar-header">
				<Grid className="sidebar-header-title">
					<img src="/logo192.png" alt="logo" />
					<h1>KOS</h1>
				</Grid>
				<Button
					classList={['sidebar-btn']}
					value={<ArrowBackIosIcon onClick={handleSideBarClose} />}
					tooltip="Close Sidebar"
				/>
			</header>
		</Grid>
	);
}

export default SideBarView;
