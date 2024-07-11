import React, { useEffect, useState } from 'react'
import { useGetAccounts } from '../../shared/useGetAccounts'
import { CardInfo } from './CardInfo'

export const ListCuentas = () => {
    const { accountData, loading, error, fetchAccount } = useGetAccounts();
    const [search, setSearch] = useState('');

    console.log(accountData)

    useEffect(() => { fetchAccount() }, []);

    const filteredAccounts = search
        ? accountData.filter(account => account.accountNumber.includes(search))
        : accountData;

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Ocurrió un error al cargar las cuentas : {error}</p>

    return (
        <div>
            <div className='text-center mt-2'>
                <input
                    type='text'
                    placeholder='Buscar por No. de Cuenta'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className='border p-2 mb-4 ml-2 rounded-md'
                />
            </div>
            <div>
                {filteredAccounts.length > 0 ? (
                    filteredAccounts.map((account, index) => (
                        <CardInfo key={index} account={account} />
                    ))
                ) : (
                    <p>No hay cuentas disponibles</p>
                )}
            </div>
        </div>
    )
}