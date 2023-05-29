export default function template2(name,email,subject,phone,message){
  var templateU={
      from_name:email,
      to_name: `El internauta o usuario ${name} con telefóno ${phone} mandó un correo con el siguiente asunto: ${subject}` ,
      message: "Su mensaje es: " + message,
      reply_to: "flores.montero.alan.leonardo@gmail.com", 
      to_email: "bobdatos@gmail.com"
    }
    return templateU;
}