import Expenses from "../components/elements/expenses/expenses";
import Finance from "../components/elements/finance/finance";
import Reports from "../components/elements/reports/reports";

const State = {
    Routers :[
        {path: "/expenses", component: Expenses, name: "Убытки"},
        {path: "/finance", component: Finance, name: "Прибыль"},
        {path: "/reports", component: Reports, name: "Отчёт"}
    ]
}

export default State;