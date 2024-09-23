import React from 'react';

const FormMap = () => {
  return (
    <div>
      <h1>Ubicación: LE SPORT Nosara</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31435.827313468617!2d-85.67499189953487!3d9.977281968107134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e5390861f64b9%3A0xfdc77634e4481c5f!2sProvincia%20de%20Guanacaste%2C%20Nosara!5e0!3m2!1ses-419!2scr!4v1726679001557!5m2!1ses-419!2scr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de LE SPORT Nosara"
      ></iframe>
    </div>
  );
};

export default FormMap;