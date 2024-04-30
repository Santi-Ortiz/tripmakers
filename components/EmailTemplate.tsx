import { Button, Img } from "@react-email/components";
import * as React from 'react';

interface EmailTemplateProps {
  nombreCompleto: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombreCompleto
}) => (
  <div className="max-width: 600px; margin: 0 auto;">
        <h1 className="text-align: center; color: #007bff;">¡Gracias por utilizar nuestro servicio!</h1>
        <p className="font-size: 16px; line-height: 1.6;">Estimado/a {nombreCompleto},</p>
        <p className="font-size: 16px; line-height: 1.6;">Queremos agradecerte por confiar en nosotros para tu experiencia de viaje. Adjunto a este correo encontrarás un código QR personalizado que te llevará directamente a tu itinerario de viaje en formato PDF, pero también puedes ir ahí presionando el botón <strong>Itinerario de Viaje</strong></p>
        <p className="font-size: 16px; line-height: 1.6;">¡Esperamos que disfrutes tu viaje y que tengas una experiencia inolvidable!</p>
        
        <div className="text-align: center; margin-top: 30px;">
          <Img
            src="https://avatars.githubusercontent.com/u/155045111?v=4"
            className="width: 100%; height: auto; margin-top: 30px;"
          />
        </div>
        
        <div className="text-align: center; margin-top: 30px;">
          <Button
            style={{
              backgroundColor: "#225f9f",
              borderRadius: "3px",
              color: "#fff",
              fontSize: "18px",
              paddingTop: "19px",
              paddingBottom: "19px",
              textDecoration: "none",
              textAlign: "center",
              display: "block",
              width: "100%",
            }}
            href="qr.link/s04lqw">
              Tu Itinerario de Viaje
          </Button>
        </div>
        
        <p className="font-size: 14px; color: #666666; margin-top: 30px; text-align: center;">Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos en cualquier momento.</p>
        
        <p className="font-size: 14px; color: #666666; text-align: center;">Saludos cordiales, El equipo de TripMakers.</p>
    </div>
);
