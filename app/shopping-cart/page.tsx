"use client"

import React from 'react';
import DetallesContacto from "@/components/DetallesContacto";
import Title from '@/components/Title';

const ShoppingCart = () => {
  const handleContactSubmit = (data: any) => {
    // Manejar los datos de contacto recibidos desde DetallesContacto
    console.log('Datos de contacto recibidos:', data);
  };

  return (
    <div>
      <Title titulo="¡Tu compra está casi lista!" subtitulo="Por favor completa tus datos de contacto para finalizar la compra" backgroundImage='/img-1.png'/> 
      <DetallesContacto onSubmit={handleContactSubmit} />
    </div>
  );
}

export default ShoppingCart;