<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage ('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('info@fls.guru', "Фрилансер по жизни");
//Кому отправить
$mail->addAddress("simply.choc.help@gmail.com");
//Тема письма
$mail->Subject = 'Привет! Это "Фрилансер по жизни"';

//Тело письма
$body = '<h1>Встречайте супер письмо!</h1>';
if (trim(!empty($_POST['name']))) {
$body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
// $body.='<p›<strong>E-mail:</strong>
// '.$_POST ['email']. '</p>'
$body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
$body.='<p><strong>Комментарий:</strong>'.$_POST['message'].'</p>';
}

$mail->Body = $body;


if (!$mail->send()) {
    $message = "Error";
} else {
    $message = "Данные для отправки!";
}

$response = ["message" => $message];

header('Content-type: application/json');
echo json_encode($response);
?>