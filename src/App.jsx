import './App.css';

const users = [
	{
		_id: '67rdca3eeb7f6fgeed471815',
		name: 'Джон Дориан',
		age: 13,
	},
	{
		_id: '67rdca3eeb7f6fgeed471816',
		name: 'Кокс',
		age: 103,
	},
	{
		_id: '67rdca3eeb7f6fgeed471817',
		name: 'Боб Келсо',
		age: 32,
	},
	{
		_id: '67rdca3eeb7f6fgeed471818',
		name: 'Рэйчел Грин',
		age: 233,
	},
	{
		_id: '67rdca3eeb7f6fgeed471819',
		name: 'Шелдон Купер',
		age: 2,
	},
	{
		_id: '67rdca3eeb7f6fgeed471820',
		name: 'Леонард Хофстедтер',
		age: 1,
	},
	{
		_id: '67rdca3eeb7f6fgeed471821',
		name: 'Говард Воловиц',
		age: 14,
	},
	{
		_id: '67rdca3eeb7f6fgeed471822',
		name: 'Никола Тесла',
		age: 16,
	},
	{
		_id: '67rdca3eeb7f6fgeed471823',
		name: 'Моника Геллер',
		age: 18,
	},
	{
		_id: '67rdca3eeb7f6fgeed471824',
		name: 'Рататуй',
		age: 19,
	},
	{
		_id: '67rdca3eeb7f6fgeed47181f',
		name: 'Джоуи Триббиани',
		age: 26,
	},
	{
		_id: '67rdca3eeb7f6fgeed47181r',
		name: 'Брэд Питт',
		age: 23,
	},
];

function App() {
	return (
		<>
			<h1>Table</h1>
			<div className="table">
				<table className="usersTable">
					<thead>
						<tr className="headRow">
							<th className="headCol">Имя</th>
							<th className="headCol">Возраст</th>
							<th className="headCol">Удалить</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => {
							return (
								<tr className="userRow" key={user._id}>
									<td className="userCol">{user.name}</td>
									<td className="userCol">{user.age}</td>
									<td className="userCol">Удалить</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default App;
