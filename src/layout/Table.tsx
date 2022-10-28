import React, { useEffect } from 'react'
import { product } from '../App'
import Tablecontent from '../components/TableContent'


export default function Table() {

    return (
        <>
            <table border={1}>
                <tr className='head'>
                    <td>Name</td>
                    <td>Size</td>
                    <td>Quantity</td>
                    <td>Category</td>
                    <td>Company</td>
                </tr>
                <Tablecontent/>
            </table>
        </>
    )
}
