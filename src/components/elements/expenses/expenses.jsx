import style from './expenses.module.css';
import React, {useContext, useState} from "react";
import {Context} from "../../../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../../Loader/loader";

const Expenses = () => {

    const {firestore} = useContext(Context)

    const [expenses, loading] = useCollectionData(
        firestore.collection('expenses')
    )

    const [valueText, setValueText] = useState('')
    const [valueNumb, setValueNumb] = useState('')

    if (loading) {
        return <Loader />
    }

    var Summa = 0;

    expenses.map(item => (
        Summa = Summa + item.sum
    ))

    const send = async () => {
        if ((valueText != '') || (valueNumb != '')) {
            firestore.collection('expenses').add({
                category: valueText,
                sum: (+valueNumb)
            })
        }
        expenses.map(item => (
            Summa = Summa + item.sum
        ))
        setValueText('')
        setValueNumb('')
    }

    return(
        <div className={style.expenses}>
            <div className={style.result}>
                Всего: {Summa}
            </div>
            <div className={style.content}>
                {expenses.map(item => (
                    <div className={style.con}>
                        <div className={style.cat}>{item.sum} руб.</div>
                        <div style={{
                            width: '55px',
                            height: Math.floor(item.sum / (Summa / 100)) + '%',
                            background: "brown",
                            color: 'white'
                        }}>{Math.floor(item.sum / (Summa / 100))} %</div>
                        <div className={style.cat}>{item.category}</div>
                    </div>
                ))}
            </div>
            <div className={style.btns}>
                <input type="text" placeholder="Категория" className={style.input} onChange={e => {setValueText(e.target.value)}} />
                <input type="number" placeholder="Cумма категории" className={style.input} onChange={e => {setValueNumb(e.target.value)}} />
                <button onClick={send}>Расчитать</button>
            </div>
        </div>
    )
}

export default Expenses;