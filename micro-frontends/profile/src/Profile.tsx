import React, { useEffect, useState, useCallback } from 'react';
import { ErrorModal, ErrorBoundary, Button } from '@micro-observability/ui';
import { trackError, trackAction } from '@micro-observability/utils';
import {
	ProfileContainer,
	ProfileHeader,
	ProfileContent,
	ButtonsContainer,
	Character,
	CharacterImage,
	CharacterInfo,
	CharacterInfoDetail,
	CharacterInfoDetailName,
	Loader,
	Title,
} from './ProfileStyles';

import packageJson from '../package.json';

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
			trackError(error, {
				moduleName: packageJson.name,
				moduleVersion: packageJson.version,
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
    <ProfileContainer>
		<ProfileHeader>
			<Title>Profile v{packageJson.version}</Title>
			{isFetching ? <Loader>🌀</Loader> : ''}
		</ProfileHeader>
		<ProfileContent>
			<Character>
				{character?.id && (
					<>
						<CharacterImage src={character.image} />
						<CharacterInfo>
							<CharacterInfoDetail>
								<CharacterInfoDetailName>Name: </CharacterInfoDetailName>
								{character.name}
							</CharacterInfoDetail>
							<CharacterInfoDetail>
								<CharacterInfoDetailName>Location: </CharacterInfoDetailName>
								{character.location.name}
							</CharacterInfoDetail>
							<CharacterInfoDetail>
								<CharacterInfoDetailName>Species: </CharacterInfoDetailName>
								{character.species}
							</CharacterInfoDetail>
							<CharacterInfoDetail>
								<CharacterInfoDetailName>Status: </CharacterInfoDetailName>
								{character.status}
							</CharacterInfoDetail>
						</CharacterInfo>
					</>
				)}
			</Character>
			<ButtonsContainer>
				<Button onClick={() => setCharacter({ id: 'Buggy Character' })}>Error Character</Button>
				<Button onClick={() => fetchCharacter()} disabled={isFetching}>Fetch Character</Button>
				<Button onClick={() => fetchCharacter({ fail: true })} disabled={isFetching}>Fetch Character Error</Button>
			</ButtonsContainer>
		</ProfileContent>
		<ErrorModal
			isOpen={isModalDisplayed}
			onClose={() => setIsModalDisplayed(false)}
			meta={{
				moduleName: packageJson.name,
            	moduleVersion: packageJson.version,
				componentSource: 'Profile'
			}}
		/>
    </ProfileContainer>
  );
};

const ProfileWithBoundary = () => (
  <ErrorBoundary
    name="Profile"
    packageName={packageJson.name}
    packageVersion={packageJson.version}
  >
    <Profile />
  </ErrorBoundary>
);

export { ProfileWithBoundary as Profile };