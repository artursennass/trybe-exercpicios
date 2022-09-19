import { useEffect, useState } from "react";
import { listOfEmails } from "../helpers/mockEmailList";

export default function EmailList() {
    const [emailList, setEmailLIst] = useState([]);
    const [alertPop, setAlertPop] = useState(false)

    useEffect(() => setEmailLIst(listOfEmails), [emailList]);

    const isAllRead = () => {
        const newEmailList = emailList.filter((email) => email.status === 1);
        const response = newEmailList.length === emailList.length;
        setAlertPop(response)
    }

    useEffect(isAllRead, [emailList]);


    const handleReadEmails = (id, isRead) => {
        const newEmailList = emailList.map((email) =>{
               return email.id === id && (email.status = isRead);
        })
        setEmailLIst(newEmailList)
    }

    const changeAllStatus = (isRead) => {
        const newEmailList = emailList.map((email) =>{
            return email.status = isRead;
     })
     setEmailLIst(newEmailList)
    }

  return (
    <div>
        {alertPop && alert('Você leu todos os seus emails!')}
        <section>
            <button type="button" onClick={() => changeAllStatus(1)}>Marcar todos como lidos</button>
            <button type="button" onClick={() => changeAllStatus(0)}>Marcar todos como não lidos</button>
        </section>
        <ul>
            {emailList.map(({id, title, status}) => {
                
               return (
                <li key={id} className={status === 1 ? 'read' : ''}>
                <h3>{title}</h3>
                <button type="button" onClick={() => handleReadEmails(id, 0)} >&#128193;</button>
                <button type="button" onClick={() => handleReadEmails(id, 1)}>&#128194;</button>
            </li>
               )
            })}
        </ul>
    </div>
  );
};
