import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    //throw new Error("No.... Something went wrong..."); //Try error catching ErrorBoundry
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );

};

export default CardList;