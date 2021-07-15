import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadData} from '../../store/actions/data'
import Loader from 'react-loader-spinner'
import classes from './Create.module.scss'
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Create = () => {
	const url = window.location.pathname.split('/')[1]
	const data = useSelector(state => state.data.posts).filter(e => e.rub === url)
	const loading = useSelector(state => state.data.loading)


}

export default Create