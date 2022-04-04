import React from 'react';

function Contact() {
  return (
    <>
        <h1></h1>
        <h3 className='nyitva'>Nyitvatartás az alábbi időpontokban:</h3>
        <h4>

            <table className='tabla'>
        <tr>
            <th>Hétfő</th>
            <th>Kedd</th>
            <th>Szerda</th>
            <th>Csütörtök</th>
            <th>Péntek</th>
            <th>Szombat</th>
            <th>Vasárnap</th>
        </tr>

        <tr>
            <td>8:00-16:00</td>
            <td>8:00-16:00</td>
            <td>8:00-16:00</td>
            <td>8:00-16:00</td>
            <td>8:00-16:00</td>
            <td>Zárva!</td>
            <td>Zárva!</td>
        </tr>
    </table>
    </h4>

    <h4>További elérhetőségek:</h4>
    <h4>Cím:Thököly u. 44 Szeged 6726</h4>
    <h4>Tel:06306485393</h4>
    <h4>Email:furgelabakallatmenhely@gmail.com</h4>
    <h4>Facebook oldalunk:<a href="https://www.facebook.com/F%C3%BCrge-L%C3%A1bak-%C3%81llatmenhely-101968349148902">Fürge Lábak Állatmenhely</a></h4>



    </>
  );
}

export default Contact;