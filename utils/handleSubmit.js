import { toast } from 'react-toastify';
import { sendContactForm } from "@/lib/api";
import generalMailTemplate from '@/lib/generalMailTemplate';


export const handleHomeContactSubmit = async (values, { setSubmitting, resetForm }, successMsg, errorMsg, clientname) => {
    try {
        await sendContactForm({
            subject: `Solicitud de Información de Servicios - ${clientname}`,
            text: `
                Empresa: ${values.company}\n
                Nombre: ${values.name}\n
                Email: ${values.email}\n
                Teléfono: ${values.phone}\n
                Servicios: ${values.services.join(', ')}\n
                Mensaje: ${values.message}`,
            html: `${generalMailTemplate({ 
                values: {
                    ...values,
                    services: values.services.join(', ')
                } 
            })}`
        });
        toast.success(successMsg);
        resetForm();
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        toast.error(errorMsg);
    }
    setSubmitting(false);
};