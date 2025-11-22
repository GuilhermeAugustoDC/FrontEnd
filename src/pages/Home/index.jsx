import { useState } from 'react';
import './style.css';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import FormContainer from '../../components/FormContainer';
import api from '../../services/api';

function Home() {
	// Rotas API
	// router.get('/tarologos', getTarologo);
	// router.get('/tarologo/:id', createTarologo);
	// router.post('/createTarologo', createTarologo);
	// router.put('/updateTarologo/:id', createTarologo);
	// router.delete('/deleteTarologo/:id', createTarologo);

	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [telegram, setTelegram] = useState('');
	const [instagram, setInstagram] = useState('');
	const [youtube, setYoutube] = useState('');
	const [tiktok, setTiktok] = useState('');
	const [facebook, setFacebook] = useState('');

	async function sendForm(e) {
		e.preventDefault();
		// Log dos valores antes do envio
		console.log('Valores enviados:', {
			nome,
			email,
			whatsapp,
			telegram,
			instagram,
			youtube,
			tiktok,
			facebook,
		});
		try {
			const response = await api.post('/createTarologo', {
				nome,
				email,
				whatsapp,
				telegram,
				instagram,
				youtube,
				tiktok,
				facebook,
			});
			console.log('Resposta da API:', response.data);
			alert('Dados enviados com sucesso');
		} catch (error) {
			console.log('Erro ao realizar cadastro:', error.response?.data);
			if (error.response) {
				console.log('Dados enviados no erro:', error.config.data);
			}
			alert('Erro ao cadastrar!');
		}
	}

	return (
		<FormContainer>
			<form onSubmit={sendForm}>
				<h1>Cadastrar Tarologo</h1>
				<InputField
					value={nome}
					onChange={(e) => setNome(e.target.value)}
					name='nome'
					placeholder='Nome'
					type='text'
				/>
				<InputField
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					name='email'
					placeholder='E-Mail'
					type='email'
				/>
				<InputField
					value={whatsapp}
					onChange={(e) => setWhatsapp(e.target.value)}
					name='whatsapp'
					placeholder='WhatsApp'
					type='tel'
				/>
				<InputField
					value={telegram}
					onChange={(e) => setTelegram(e.target.value)}
					name='telegram'
					placeholder='Telegram'
					type='text'
				/>
				<InputField
					value={instagram}
					onChange={(e) => setInstagram(e.target.value)}
					name='instagram'
					placeholder='Instagram'
					type='text'
				/>
				<InputField
					value={youtube}
					onChange={(e) => setYoutube(e.target.value)}
					name='youtube'
					placeholder='Youtube'
					type='text'
				/>
				<InputField
					value={tiktok}
					onChange={(e) => setTiktok(e.target.value)}
					name='tiktok'
					placeholder='TikTok'
					type='text'
				/>
				<InputField
					value={facebook}
					onChange={(e) => setFacebook(e.target.value)}
					name='facebook'
					placeholder='Facebook'
					type='text'
				/>
				<Button label='Cadastrar' type='submit' className='submit-btn' />
			</form>
		</FormContainer>
	);
}

export default Home;
