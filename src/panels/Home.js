import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";

function Home ({ id, go, fetchedUser, count, timer, setTimer}) {
	if (timer > 0) {
		React.useEffect(() => {
			const clock =
				timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
			return () => clearInterval(clock);
		}, [timer]);
	} else if (timer === 0) {
		bridge.send("VKWebAppFlashSetLevel", {"level": 1}).then((req)=>(console.log(req)));
	}
	function start(e) {
		setTimer(-1);
		bridge.send("VKWebAppFlashSetLevel", {"level": 0}).then((req)=>(console.log(req)));
		console.log(timer);
		count = 0;
		go(e);
	}
	return (
		<Panel id={id}>
			<PanelHeader>Example</PanelHeader>
			{fetchedUser &&
			<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}

			<Group header={<Header mode="secondary">Navigation Example</Header>}>
				<Div>
					<Button stretched size="l" mode="secondary" onClick={start} data-to="categories">
						Categories
					</Button>
				</Div>
				<Div>
					<Button stretched size="l" mode="secondary" onClick={start} data-to="countPlayers">
						Start game
					</Button>
				</Div>
				<Div>
					<Button stretched size="l" mode="secondary" onClick={go} data-to="timer" count={count} timer={timer} setTimer={setTimer}>
						Timer
					</Button>
				</Div>
			</Group>
		</Panel>
	);
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
	count: PropTypes.number.isRequired,
	timer: PropTypes.number.isRequired,
	setTimer: PropTypes.func.isRequired,
	// categories: PropTypes.array.isRequired,
};

export default Home;
