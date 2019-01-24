import React from 'react'
import View from '../../components/Terminal/view.jsx';

const view = ({match}) => {
	return (
		<View name={match.params.name}/>
	)
}

export default view
