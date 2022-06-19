import React from "react";
import PropTypes from "prop-types";
import Home from "../../panels/Home";
import {Div, Header, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

function Timer({id, go, count, timer, setTimer}) {
    console.log(timer)
    if (timer === -1) {
        setTimer(20 * count);
        bridge.send("VKWebAppFlashSetLevel", {"level": 0}).then((req)=>(console.log(req)));
    }
    React.useEffect(() => {
        const clock =
            timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(clock);
    }, [timer]);
    if (timer === 0) {
        bridge.send("VKWebAppFlashSetLevel", {"level": 1}).then((req)=>(console.log(req)));
    }

    return (
        <Panel id={id} className="App">
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="home" timer={timer} setTimer={setTimer}/>}
            >
                Timer
            </PanelHeader>
            <Header>Countdown: {timer}</Header>
        </Panel>
    );
}


Timer.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    timer: PropTypes.number.isRequired,
    setTimer: PropTypes.func.isRequired,
};

export default Timer;