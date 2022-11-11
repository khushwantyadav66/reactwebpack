import React from 'react';

import Input from '../FormElements/Input';
import Button from '../FormElements/Button';

type MainHeaderProps = {
  isSearchMode?: boolean;
};

export default function MainHeader({ isSearchMode = false }: MainHeaderProps) {
  const onInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value, isSearchMode);
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      searchInput: { value: string };
    };
    console.log(target.searchInput.value);
  };

  const onAddMovieClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(event.currentTarget.value);
  };

  return (
    <header className='header'>
      <div className='header__logo-box'>
        <h2 className='header__logo'>
          <span className='header__logo--main'>netflix</span>
          <span className='header__logo--sub'>roulette</span>
        </h2>

        <Button secondary={true} onClickHandler={onAddMovieClickHandler}>
          &#43; Add Movie
        </Button>
        {/* <button className='btn header__btn'>&#43; Add Movie</button> */}
      </div>

      <div className='header__search'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Find Your Movie</span>
        </h1>
        <form className='search' onSubmit={onSubmitHandler}>
          <Input
            element='input'
            type='text'
            name='searchInput'
            placeholder='What do you want to watch?'
            className='search__input'
            onInput={onInputChangeHandler}
          />
          <Button primary={true} type='submit'>
            Search
          </Button>
          {/* <button className='btn search__btn'>Search</button> */}
        </form>
      </div>
    </header>
  );
}
