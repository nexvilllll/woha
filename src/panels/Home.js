import React from 'react';
var admin = require('firebase-admin');
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { platform, IOS } from '@vkontakte/vkui';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
//import Icon28ChevronBack from '@vkontakte/icons/dist/24/chats';
import Pro from '@vkontakte/icons/dist/24/user';
//import Icon24Back from '@vkontakte/icons/dist/24/back';
import Out from '@vkontakte/icons/dist/20/info';
import Aut from '@vkontakte/icons/dist/24/bug';
const osName = platform(); //<p align="left">Здесь показаны все беседы, в которых вы выше ролью, чем 0.</p>

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://chatmanagerars.firebaseio.com/'
});

const Home = ({ props, id, go, fetchedUser }) => (
	<Panel id={id}>
				<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="info">
				{osName === IOS ? <Pro/> : <Pro/>}
			</PanelHeaderButton>}
		>
			Amplify | Главная
		</PanelHeader>
		{fetchedUser &&
		<Group title="Информация">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Чаты">
			<p align="center">Добро пожаловать в BETA приложение Amplify.</p>
			<p align="center"><Out/></p>
			<p align="center">Тут вы можете увидеть беседы в которых, вы выше чем 0 ранг.</p>
			<p align="center">Soon</p>
			<p align="center"><Aut/></p>
			<Div>
		    <Button size="xl" level="1" onClick={go} data-to="info">
			+ Добавить в беседу
		    </Button>
			</Div>
			<Div>
		    <Button size="xl" level="3" onClick={go} data-to="info">
			Рейтинг
		    </Button>
			</Div>
			<Div>
		    <Button size="xl" level="3" onClick={go} data-to="Persik">
			О сервисе
		    </Button>
			</Div>
			<a href='https://..сюда_ссылку/>Ссылка</a>
		</Group>
	</Panel>
);


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
};

export default Home;
