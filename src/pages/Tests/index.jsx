import { useState } from 'react';
import api from '../../services/api';

function Tests() {
	const [result, setResult] = useState(null);
	const [id, setId] = useState('');
	const [form, setForm] = useState({
		nome: '',
		email: '',
		whatsapp: '',
		telegram: '',
		instagram: '',
		youtube: '',
		tiktok: '',
		facebook: '',
	});

	const getAll = async () => {
		try {
			const res = await api.get('/tarologos');
			setResult(res.data);
		} catch (err) {
			setResult(err.response?.data || err.message);
		}
	};

	const getById = async () => {
		try {
			const res = await api.get(`/tarologo/${id}`);
			setResult(res.data);
		} catch (err) {
			setResult(err.response?.data || err.message);
		}
	};
	const create = async () => {
		try {
			const res = await api.post('/createTarologo', form);
			setResult(res.data);
			console.log(res.data);
		} catch (err) {
			setResult(err.response?.data || err.message);
		}
	};

	const update = async () => {
		try {
			const res = await api.put(`/updateTarologo/${id}`, form);
			setResult(res.data);
		} catch (err) {
			setResult(err.response?.data || err.message);
		}
	};

	const deleteById = async () => {
		try {
			const res = await api.delete(`/deleteTarologoById/${id}`);
			setResult(res.data);
		} catch (err) {
			setResult(err.response?.data || err.message);
		}
	};

	const deleteAll = async () => {
		try {
			const res = await api.delete('/deleteAllTarologos');
			setResult(res.data);
		} catch (err) {
			setResult(err.response?.data || err.message);
		}
	};

	return (
		<div style={{ padding: 20 }}>
			<h2>Testes das Rotas Tarólogo</h2>
			<div style={{ marginBottom: 10 }}>
				<button onClick={getAll}>GET /tarologos</button>
			</div>
			<div style={{ marginBottom: 10 }}>
				<input
					placeholder='ID do Tarólogo'
					value={id}
					onChange={(e) => setId(e.target.value)}
					style={{ marginRight: 8 }}
				/>
				<button onClick={getById}>GET /tarologo/:id</button>
				<button onClick={deleteById} style={{ marginLeft: 8 }}>
					DELETE /deleteTarologoById/:id
				</button>
				<button onClick={update} style={{ marginLeft: 8 }}>
					PUT /updateTarologo/:id
				</button>
			</div>
			<div style={{ marginBottom: 10 }}>
				<h4>Dados do Tarólogo</h4>
				{Object.keys(form).map((key) => (
					<input
						key={key}
						placeholder={key}
						value={form[key]}
						onChange={(e) => setForm({ ...form, [key]: e.target.value })}
						style={{ marginRight: 8, marginBottom: 4 }}
					/>
				))}
				<button onClick={create}>POST /createTarologo</button>
			</div>
			<div style={{ marginBottom: 10 }}>
				<button onClick={deleteAll}>DELETE /deleteAllTarologos</button>
			</div>
			<div>
				<h4>Resultado:</h4>
				<pre style={{ background: '#333333ff', padding: 10 }}>
					{JSON.stringify(result, null, 2)}
				</pre>
			</div>
		</div>
	);
}

export default Tests;
