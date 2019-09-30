import React from 'react';

const Card = ({ name, lastName, companyName, jobTitle, email, id }) => {
  return (
    <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='member' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}{lastName}</h2>
        <p>{companyName}</p>
        <p>{jobTitle}</p>
        <button href="{email}">Stuur een email</button>
      </div>
    </div>
  );
}

export default Card;
