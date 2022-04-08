import React, { useEffect, useState, useCallback } from 'react';
import './Profile.css';

import ModuleErrorBoundary from './ModuleErrorBoundary';
import ErrorModal from './ErrorModal';
import errorConfig from './error.config';
import { getUserId } from './getUserId';

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const Profile = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [isModalDisplayed, setIsModalDisplayed] = useState(false);
	const [character, setCharacter] = useState();

	const fetchCharacter = useCallback(({ fail } = {}) => {
		setIsFetching(true);
		fetch(`https://rickandmortyapi.com/api/character/${getRandomInt(1, 100)}`)
		.then(response => response.json())
		.then((response) => new Promise(resolve => setTimeout(() => resolve(response), 2000)))
		.then(character => {
			if(fail) {
				throw new Error('Failed to load character');
			}
			setCharacter(character);
			setIsFetching(false);
		})
		.catch(error => {
			setIsFetching(false);
			setIsModalDisplayed(true);
			window?.newrelic?.noticeError(error, {
				...errorConfig,
				userId: getUserId(),
				errorType: 'AsyncError',
				componentSource: 'Profile',
			})
			throw new Error(error);
		});
	}, []);

	useEffect(() => {
		fetchCharacter();
	}, []);

  return (
    <main className='Profile'>
		<header className='ProfileHeader'>
			<h2>Profile v{errorConfig.moduleVersion}</h2>
			{isFetching ? <span className='Loader'>🌀</span> : ''}
		</header>
		<section className='ProfileContent'>
			<div className='Character'>
				{character?.id && (
					<>
						<img src={character.image} />
						<div className='CharacterInfo'>
							<p><span>Name:</span> {character.name}</p>
							<p><span>Location:</span> {character.location.name}</p>
							<p><span>Species:</span> {character.species}</p>
							<p><span>Status:</span> {character.status}</p>
						</div>
					</>
				)}
			</div>
			<div className='ButtonsContainer'>
				<button className="Button" onClick={() => setCharacter({ id: 'Buggy Character' })}>Error Character</button>
				<button className="Button" onClick={() => fetchCharacter()} disabled={isFetching}>Fetch Character</button>
				<button className="Button" onClick={() => fetchCharacter({ fail: true })} disabled={isFetching}>Fetch Character Error</button>
			</div>
		</section>
		<ErrorModal isOpen={isModalDisplayed} onClose={() => setIsModalDisplayed(false)} meta={{ componentSource: 'Profile' }}/>
    </main>
  );
};

const ProfileWithBoundary = (props) => (
  <ModuleErrorBoundary name="Profile">
    <Profile {...props} />
  </ModuleErrorBoundary>
);

export { ProfileWithBoundary as default, Profile };