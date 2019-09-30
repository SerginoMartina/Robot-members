import React from 'react';
import Card from './Card';

const CardList = ({ members }) => {
  return (
    <div className="pa4">
      {
        members.map((user, i) => {
          return (
            <Card
              key={i}
              id={members[i].id}
              name={members[i].name}
              lastName={members[i].lastName}
              companyName={members[i].companyName}
              jobTitle={members[i].jobTitle}
              email={members[i].email}
              />
          );
        })
      }
    </div>

   
  );
}

export default CardList;