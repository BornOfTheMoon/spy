import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Categories from "./components/categories/Categories";
import Names from "./components/names/Names";
import CountPlayers from "./components/countPlayers/CountPlayers";
import Roles from "./components/roles/Roles";
import SecretRoles from "./components/secretRole/SecretRole";
import Timer from "./components/Timer/Timer";

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [timer, setTimer] = useState(-1)
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [countPlayer, setCount] = useState(4);
	const [players, setPlayers] = useState([]);
	const [counter, setCounter] = useState(0);
	// const [place, setPlace] = useState("Vezdekod");
	const [categories, setCategories] = useState([{value: "church", label: "Церковь"},
															{value: "bar", label: "Бар"},
															{value: "circus", label: "Цирк"},
															{value: "hospital", label: "Больница"},
															{value: "Vezdekod", label: "Вездекод"}
														  ]);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} count={players.length} timer={timer} setTimer={setTimer}/>
								<Categories id='categories' go={go} categories={categories} setCategories={setCategories}/>
								<CountPlayers id='countPlayers' go={go} setCount={setCount} />
								<Persik id='persik' go={go} />
								<Names id='playersNames' go={go} count={countPlayer} setPlayers={setPlayers} categories={categories}/>
								<Roles id='role' go={go} players={players} counter={counter}/>
								<SecretRoles id='secretRole' go={go} players={players} counter={counter} setCounter={setCounter} setTimer={setTimer}/>
								<Timer id="timer" go={go} count={players.length} timer={timer} setTimer={setTimer}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
