function generalMailTemplate({ values }) {
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charSet="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta General</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Tektur:wght@400..900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&family=Space+Grotesk:wght@300..700&family=Tektur:wght@400..900&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Geologica', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }

      .container {
        margin: 20px auto;
        max-width: 600px;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #f0f0f0;
      }
      .header {
        background-color: #1c5de9;
        color: #ffffff;
        padding: 20px;
        text-align: center;
        font-family: 'Tektur', sans-serif;
      }
      
      .body {
        padding: 20px;
      }
      .client-info, .message {
        margin-bottom: 20px;
      }
      .message {
        padding: 15px;
        background-color: #f0f0f0;
        border-left: 5px solid #0e051c;
      }
      .footer {
        background-color: #1c5de9;
        color: #ffffff;
        text-align: center;
        padding: 20px;
        font-size: 14px;
      }
      strong {
        color: #0e051c;
      }

      .header h1, .footer, strong {
        font-family: 'Tektur', sans-serif;
      }

      span {
        color: #333; /* Color más oscuro para mejor contraste */
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Consulta General</h1>
      </div>
      <div class="body">
        <div class="client-info">
          <p><strong>Empresa:</strong> <span>${values.company}</span></p>
          <p><strong>Nombre:</strong> <span>${values.name}</span></p>
          <p><strong>Email:</strong> <span>${values.email}</span></p>
          <p><strong>Teléfono:</strong> <span>${values.phone}</span></p>
          <p><strong>Servicios:</strong> <span>${values.services}</span></p>
        </div>
        <div class="message">
          <p><strong>Mensaje:</strong> ${values.message}</p>
        </div>
      </div>
      <div class="footer">
        <p>Este correo contiene información que fue proporcionada por un posible cliente, el recuadro de mensaje contiene detalles de la consulta</p>
      </div>
    </div>
  </body>
  </html>  
    `;
}

export default generalMailTemplate;
