
import Card from "Card/Card";
import React from "react"
import PropTypes from 'prop-types';

function CardList(props) {
    return (
        <div>
            {props.profiles.map((profile) => <Card key={profile.id}  {...profile} />)}
        </div>
    )
}

CardList.propTypes = {
    profiles: PropTypes.array.isRequired
}

export default CardList