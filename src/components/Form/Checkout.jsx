import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from "../../service/getFirebase";
import swal from 'sweetalert';

import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, MensajeExito, MensajeError} from './Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Inputs';



const inatialState = {
    name: '',
    email: '',
    phone: ''
}

export const Checkout = () => {
    
    
    const [buyer, setBuyer] = useState(inatialState)  

    const {product , precioTotal, borrarListado} = useCartContext() 
    
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [correo2, cambiarCorreo2] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);


    const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

    const validarCorreo2 = () => {
		if(correo.campo.length > 0){
			if(correo.campo !== correo2.campo){
				cambiarCorreo2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarCorreo2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}


    const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}
    

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(
			apellido.valido === 'true' &&
			nombre.valido === 'true' &&
			correo2.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarApellido({campo: '', valido: ''});
			cambiarCorreo({campo: '', valido: null});
			cambiarCorreo2({campo: '', valido: 'null'});
			cambiarTelefono({campo: '', valido: null});


            const newOrder={
                buyer: buyer,
                items: product,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: precioTotal()
            }
            console.log(newOrder)
    
    
            const db = getFirestore()
            const orders = db.collection('orders')
    
    
            orders.add(newOrder)
            .then(({id}) => {
                swal(`Gracias por su compra, el código de su compra es: ${id}`);
            }).catch(err => {
                swal(`Ha ocurrido un error, su orden no se ha generado`);
            })
            .finally(()=>{
                setBuyer(inatialState)
                borrarListado()
            })
    
			// ... 
		} else {
			cambiarFormularioValido(false);
		}



    }
    
    

   
    return (
        <>
        
		<main>
			<Formulario action="" onSubmit={handleSubmit}>

				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="Tomas"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
                <Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Laus"
					name="usuario"
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.apellido}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="tomaslaus99@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={correo2}
					cambiarEstado={cambiarCorreo2}
					tipo="email"
					label="Repetir correo electrónico"
					name="password2"
					leyendaError="Ambos correos deben ser iguales."
					funcion={validarCorreo2}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder="4491234567"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>



				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los terminos y condiciones
					</Label>
				</ContenedorTerminos>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<button type="submit" className='borrarButton'>Enviar</button>
					{formularioValido === true && <MensajeExito>¡Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
        </>
    )
}




