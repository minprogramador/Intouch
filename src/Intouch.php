<?php

namespace App;
use App\Util;

class Intouch
{
	public function curljson($url,$cookies,$post,$referer=null,$header=1,$follow=false,$xmlhttp=null, $proxy)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_HEADER, $header);
		if ($cookies) curl_setopt($ch, CURLOPT_COOKIE, $cookies);
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:20.0) Gecko/20100101 Firefox/20.0');
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, $follow);
		if(isset($referer)){ curl_setopt($ch, CURLOPT_REFERER,$referer); }
		else{ curl_setopt($ch, CURLOPT_REFERER,$url); }
		if ($post)
		{
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $post); 
		}

		curl_setopt($ch, CURLOPT_HTTPHEADER, array("X-Requested-With: XMLHttpRequest", "Content-Type: application/json; charset=utf-8"));

		if($proxy){
			curl_setopt($ch, CURLOPT_PROXY, $proxy);
		}

		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
		curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($ch, CURLOPT_TIMEOUT, 30); 
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 20);
			
		$res = curl_exec( $ch);

		curl_close($ch); 
		return $res;
	}

	public function getCidades($cookie, $post, $proxy)
	{
		$inicial = self::curljson($_ENV['URLINTOUCH'] . 'Home.aspx/getCidadesByUF',$cookie,$post,$_ENV['URLINTOUCH'] . 'home.aspx',false,false,'ok', $proxy);
		echo $inicial;
		die;		
	}

	public function consultar($post, $cookie, $proxy)
	{

		$url    = $_ENV['URLINTOUCH']. 'home.aspx';
		$ref    = $url;
		$res = Util::curl($url,$cookie, http_build_query($post), null, false, false, $proxy);
		$res = str_replace('src="js/', 'src="Servicos/Intouch/js/', $res);
		$res = str_replace('src="JavaScript/', 'src="Servicos/Intouch/JavaScript/', $res);
		$res = str_replace('href="css/', 'href="Servicos/Intouch/css/', $res);
		$res = str_replace('action="./home.aspx"', 'action=""', $res);
		$res = str_replace('//tracker.tolvnow.com/js/tn.js', '', $res);
		$rem = Util::corta($res, 'class="tab_recursos">', '</div>');
		$res = str_replace($rem, '', $res);
		$rem = Util::corta($res, '<div class="header_all">', '<div class="all-elements">');
		$res = str_replace($rem, '<br><br>', $res);
		$res = str_replace('cloudfront.net/pages/scripts/0018/8401.js', '', $res);
		$res = str_replace('src="img/', 'src="Servicos/Intouch/img/', $res);
		$res = str_replace('src="Imagens/', 'src="Servicos/Intouch/Imagens/', $res);
		$res = str_replace('src="images/', 'src="Servicos/Intouch/images/', $res);
		$res = str_replace('src="Images/', 'src="Servicos/Intouch/Images/', $res);
		$res = str_replace('href="/WebResource.axd', 'href="Servicos/Intouch/WebResource.axd', $res);
		$res = str_replace('src="/ScriptResource.axd', 'src="Servicos/Intouch/ScriptResource.axd', $res);
		$res = str_replace('src="/WebResource.axd', 'src="/Servicos/Intouch/WebResource.axd', $res);
		$res = str_replace('getCidadesByUF', '', $res);
		echo utf8_encode($res);
	}

	public function main($cookie, $proxy)
	{
		$url    = $_ENV['URLINTOUCH'] . 'home.aspx';
		$ref    = $_ENV['URLINTOUCH'];
		$res = Util::curl($url,$cookie,null, null, false, false, $proxy);
		$res = str_replace('src="js/', 'src="Servicos/Intouch/js/', $res);
		$res = str_replace('src="JavaScript/', 'src="Servicos/Intouch/JavaScript/', $res);
		$res = str_replace('href="css/', 'href="Servicos/Intouch/css/', $res);
		$res = str_replace('action="./home.aspx"', 'action=""', $res);
		$res = str_replace('//tracker.tolvnow.com/js/tn.js', '', $res);
		$rem = Util::corta($res, 'class="tab_recursos">', '</div>');
		$res = str_replace($rem, '', $res);
		$rem = Util::corta($res, '<div class="header_all">', '<div class="all-elements">');
		$res = str_replace($rem, '<br><br>', $res);
		$res = str_replace('cloudfront.net/pages/scripts/0018/8401.js', '', $res);
		$res = str_replace('href="/WebResource.axd', 'href="Servicos/Intouch/WebResource.axd', $res);
		$res = str_replace('src="/ScriptResource.axd', 'src="Servicos/Intouch/ScriptResource.axd', $res);
		$res = str_replace('src="/WebResource.axd', 'src="/Servicos/Intouch/WebResource.axd', $res);

		echo ($res);
	}

	public function status($cookie, $proxy)
	{
		$url    = $_ENV['URLINTOUCH'] . 'home.aspx';
		$ref    = $_ENV['URLINTOUCH'];
		$res = Util::curl($url,$cookie,null, null, false, false, $proxy);
		if(stristr($res, 'Cliente:')){
			return true;
		}
		return false;
	}

	public function login($dados, $proxy)
	{
		$url    = $_ENV['URLINTOUCH'];
		$ref    = $url;
		$getCookie = Util::curl($url,null,null, null, true, false, $proxy);
						
		$cookie = Util::getCookies($getCookie) . '; VisualizouNovoIntouch=False; UsaNovoIntouch=False;';

		$getCookie = Util::curl($url,$cookie,null,null, true, false, $proxy);
		$frm = @Util::parseForm($getCookie);
		$frm['LoginTextBoxUsuario'] = $dados->usuario;
		$frm['LoginTextBoxSenha']   = $dados->senha;
		$frm['LoginTextBoxCliente'] = $dados->cliente;

		$post = http_build_query($frm);

		$ver = Util::curl($url, $cookie, $post, $ref, true, false, $proxy);
		if(stristr($ver, 'cation: /home.aspx')){
			$url = $_ENV['URLINTOUCH'].'home.aspx';
			$ver = Util::curl($url, $cookie, null, $ref, true, false, $proxy);
			if(stristr($ver, 'Perfil:')){
				return $cookie;
			}
		}
		return false;
	}
}