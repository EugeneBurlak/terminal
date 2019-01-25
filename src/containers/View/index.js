import React from 'react'
import View from '../../components/Terminal/View';

const view = ({match}) => {
	return (
		<View operator={match.params.name}/>
	)
}

export default view
