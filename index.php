<?php

use Symfony\Component\Dotenv\Dotenv;
use App\Intouch;

require 'vendor/autoload.php';

$dotenv = new Dotenv();
$dotenv->load(__DIR__.'/.env');



Flight::before('start', function() {
	$proxy = $_ENV['PROXYINTOUCH'];
	$login = new \stdClass();
	$login->usuario = $_ENV['USUARIOINTOUCH'];
	$login->senha   = $_ENV['SENHAINTOUCH'];
	$login->cliente = $_ENV['CLIENTEINTOUCH'];
	$cookie = file_get_contents('cookieIn.txt');

	$ver = Intouch::status($cookie, $proxy);
	if($ver === false){
		$cookie = Intouch::login($login, $proxy);
		file_put_contents('cookieIn.txt', $cookie);
	}
});

Flight::route('/', function(){
	$cookie = file_get_contents('cookieIn.txt');
	if(stristr(file_get_contents('php://input'), "{")){
		$post = file_get_contents('php://input');
		$main = Intouch::getCidades($cookie, $post, $proxy);
	}elseif(count($_POST) > 0){
		$main = Intouch::consultar($_POST, $cookie, $proxy);
	}else{
		$main = Intouch::main($cookie, $proxy);
	}
	print_r($main);
});

Flight::start();


