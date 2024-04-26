import React, { useState } from 'react';

const DetallesContacto = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pagoSeleccionado, setPagoSeleccionado] = useState('');
    const [mostrarDetallesPago, setMostrarDetallesPago] = useState(false);

    const handleNext = () => {
        if (nombre && apellidos && email && telefono) {
            setMostrarDetallesPago(true);
        } else {
            alert('Por favor completa todos los campos de contacto.');
        }
    };

    const handlePagoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPagoSeleccionado(event.target.value);
    };

    const handlePagoSubmit = () => {
        // Lógica para procesar el pago
        console.log('Pago completado:', nombre, apellidos, email, telefono, pagoSeleccionado);
    };

    return (
        <div className="flex flex-col items-center justify-center border-t-2 border-b-2 border-gray-200 py-8">
            <h2 className="text-2xl font-bold mb-5">Datos de Contacto</h2>
            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition-colors duration-300 mt-4" onClick={handleNext}>Continuar</button>

            {mostrarDetallesPago && (
                <div>
                    {/*<h2>Detalles de Pago</h2>*/}
                    <div className="flex flex-col items-center justify-center border-t-2 border-b-2 border-gray-200 py-8">
                        <input type="radio" id="debito" name="pago" value="debito" onChange={handlePagoChange} />
                        <label htmlFor="debito">Tarjeta de Débito/Crédito</label>
                    </div>
                    {pagoSeleccionado === 'debito' && (
                        <div className="flex flex-col items-center justify-center border-t-2 border-b-2 border-gray-200 py-8">
                            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Nombre del Titular" />
                            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Número de Tarjeta" />
                            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Fecha de Expiración" />
                            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Código CVC" />
                            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="País" />
                            <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Código Postal" />
                        </div>
                    )}
                    <button onClick={handlePagoSubmit}>Completar Pago</button>
                </div>
            )}
        </div>
    );
}

export default DetallesContacto;
