import style from './finance.module.css';
import React, {useContext, useState} from "react";
import {Context} from "../../../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../../Loader/loader";

const Finance = () =>{

    const {firestore} = useContext(Context)

    const [valueText, setValueText] = useState('')
    const [valueNumb, setValueNumb] = useState('')

    const [finance, loading] = useCollectionData(
        firestore.collection('finance')
    )

    if (loading) {
        return <Loader />
    }

    var Summa = 0;

    finance.map(item => (
        Summa = Summa + item.sum
    ))

    const send = async () => {
        if ((valueText != '') || (valueNumb != '')) {
            firestore.collection('finance').add({
                category: valueText,
                sum: (+valueNumb)
            })
        }
        finance.map(item => (
            Summa = Summa + item.sum
        ))
        setValueText('')
        setValueNumb('')
    }

    return(
        <div className={style.expenses}>
            <div className={style.result}>
                ИТОГО: {Summa}
            </div>
            <div className={style.content}>
                {finance.map(item => (
                    <div className={style.con}>
                        <div className={style.cat}>{item.sum} руб.</div>
                        <div style={{
                            width: '50px',
                            height: Math.floor(item.sum / (Summa / 100)) + '%',
                            background: "blue",
                            color: 'white'
                        }}>{Math.floor(item.sum / (Summa / 100))} %</div>
                        <div className={style.cat}>{item.category}</div>
                    </div>
                ))}
            </div>
            <div className={style.btns}>
                <input type="text" placeholder="Введите категорию доходов..." className={style.input} onChange={e => {setValueText(e.target.value)}} />
                <input type="number" placeholder="Введите сумму доходов этой категории..." className={style.input} onChange={e => {setValueNumb(e.target.value)}} />
                <button onClick={send}>SEND</button>
            </div>
        </div>
    )
}

export default Finance;