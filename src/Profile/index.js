import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import { yourName, yourAge } from './profileSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(3),
        minWidth: 120,
    },
    heading: {
        marginBottom: '20px',
    },
}));

const Profile = () => {
    const classes = useStyles();

    const { userName } = useSelector((state) => state.profile);
    const { userAge } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = React.useState(false);

    const handleChangeName = (event) => {
        dispatch(yourName(event.target.value || ''));
    };

    const handleChangeAge = (event) => {
        dispatch(yourAge(Number(event.target.value) || ''));
    };

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div className='profileWrapper'>
            <h3 className={classes.heading}>Ваш Профиль</h3>

            <Button onClick={handleClickOpen} variant="contained" color="primary">Выберите ваше имя и возраст</Button>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>Выберите...</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-dialog-select-label">Имя</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={userName}
                                onChange={handleChangeName}
                                input={<Input />}
                            >
                                <MenuItem value={'Илья'}>Илья</MenuItem>
                                <MenuItem value={'Овик'}>Овик</MenuItem>
                                <MenuItem value={'Никита'}>Никита</MenuItem>
                                <MenuItem value={'Шамиль'}>Шамиль</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-dialog-select-label">Возраст</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={userAge}
                                onChange={handleChangeAge}
                                input={<Input />}
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={13}>13</MenuItem>
                                <MenuItem value={14}>14</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                <MenuItem value={16}>16</MenuItem>
                                <MenuItem value={17}>17</MenuItem>
                                <MenuItem value={18}>18</MenuItem>
                                <MenuItem value={19}>19</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={21}>21</MenuItem>
                                <MenuItem value={22}>22</MenuItem>
                                <MenuItem value={23}>23</MenuItem>
                                <MenuItem value={24}>24</MenuItem>
                                <MenuItem value={25}>25</MenuItem>
                                <MenuItem value={26}>26</MenuItem>
                                <MenuItem value={27}>27</MenuItem>
                                <MenuItem value={28}>28</MenuItem>
                                <MenuItem value={29}>29</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                                <MenuItem value={31}>31</MenuItem>
                                <MenuItem value={32}>32</MenuItem>
                                <MenuItem value={33}>33</MenuItem>
                                <MenuItem value={34}>34</MenuItem>
                                <MenuItem value={35}>35</MenuItem>
                                <MenuItem value={36}>36</MenuItem>
                                <MenuItem value={37}>37</MenuItem>
                                <MenuItem value={38}>38</MenuItem>
                                <MenuItem value={39}>39</MenuItem>
                                <MenuItem value={40}>40</MenuItem>
                                <MenuItem value={41}>41</MenuItem>
                                <MenuItem value={42}>42</MenuItem>
                                <MenuItem value={43}>43</MenuItem>
                                <MenuItem value={44}>44</MenuItem>
                                <MenuItem value={45}>45</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        ок
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Profile;